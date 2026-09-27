import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ToothScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();

    // Camera (FOV 42, distance 6.8 matching reference)
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Floating Group (Floats up and down)
    const floatGroup = new THREE.Group();
    rootGroup.add(floatGroup);

    // --- Lights (Exact Reference Configuration) ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff5e0, 1.7);
    dirLight1.position.set(4, 5, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffb3c1, 0.5);
    dirLight2.position.set(-5, -2, 4);
    scene.add(dirLight2);

    const pointLight1 = new THREE.PointLight(0xe3b94e, 12, 50);
    pointLight1.position.set(0, 3, -3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xc8102e, 4, 50);
    pointLight2.position.set(-3, -3, 3);
    scene.add(pointLight2);

    // --- 1. Tooth Geometry & Mesh (Exact Bezier Curve Extrusion) ---
    const toothShape = new THREE.Shape();
    toothShape.moveTo(-0.85, 1.05);
    toothShape.bezierCurveTo(-1.12, 0.45, -0.98, -0.15, -0.8, -0.75);
    toothShape.bezierCurveTo(-0.72, -1.1, -0.5, -1.18, -0.42, -0.9);
    toothShape.bezierCurveTo(-0.33, -0.55, -0.2, -0.4, 0, -0.42);
    toothShape.bezierCurveTo(0.2, -0.4, 0.33, -0.55, 0.42, -0.9);
    toothShape.bezierCurveTo(0.5, -1.18, 0.72, -1.1, 0.8, -0.75);
    toothShape.bezierCurveTo(0.98, -0.15, 1.12, 0.45, 0.85, 1.05);
    toothShape.bezierCurveTo(0.62, 1.35, 0.3, 1.42, 0, 1.34);
    toothShape.bezierCurveTo(-0.3, 1.42, -0.62, 1.35, -0.85, 1.05);

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: 0.5,
      bevelEnabled: true,
      bevelThickness: 0.3,
      bevelSize: 0.16,
      bevelSegments: 12,
      curveSegments: 32,
      steps: 1,
    };

    const toothGeometry = new THREE.ExtrudeGeometry(toothShape, extrudeSettings);
    toothGeometry.center();

    const toothMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfffdf6,
      roughness: 0.12,
      metalness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.12,
      iridescence: 0.25,
      iridescenceIOR: 1.3,
      sheen: 0.6,
      sheenColor: 0xffd9a3,
    });

    const toothMesh = new THREE.Mesh(toothGeometry, toothMaterial);
    toothMesh.scale.set(0.92, 0.92, 0.92);
    floatGroup.add(toothMesh);

    // --- 2. Inner Golden Ring (zD) ---
    const innerRingGeo = new THREE.TorusGeometry(2.1, 0.065, 24, 140);
    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0xc9a24b,
      metalness: 0.92,
      roughness: 0.24,
    });
    const innerRingMesh = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRingMesh.rotation.set(Math.PI / 2.35, 0.25, 0);
    floatGroup.add(innerRingMesh);

    // --- 3. Outer Orbital Track with 3 Spheres (kD) ---
    const outerTrackGroup = new THREE.Group();
    outerTrackGroup.rotation.set(0.45, 0, 0.35);
    rootGroup.add(outerTrackGroup);

    const outerTrackGeo = new THREE.TorusGeometry(2.75, 0.018, 12, 140);
    const outerTrackMat = new THREE.MeshBasicMaterial({
      color: 0xe3b94e,
      transparent: true,
      opacity: 0.55,
    });
    const outerTrackMesh = new THREE.Mesh(outerTrackGeo, outerTrackMat);
    outerTrackGroup.add(outerTrackMesh);

    // 3 Orbiting Spheres (1 golden, 2 pearl white)
    const sphereData = [0, 1, 2].map((i) => {
      const angle = (i / 3) * Math.PI * 2;
      return {
        pos: [Math.cos(angle) * 2.75, Math.sin(angle) * 2.75, 0] as [number, number, number],
        size: i === 1 ? 0.2 : 0.13,
        gold: i === 1,
      };
    });

    sphereData.forEach((s) => {
      const sphereGeo = new THREE.SphereGeometry(s.size, 32, 32);
      const sphereMat = new THREE.MeshPhysicalMaterial({
        color: s.gold ? 0xe3b94e : 0xffffff,
        roughness: 0.15,
        metalness: s.gold ? 0.75 : 0.1,
        clearcoat: 1.0,
      });
      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      sphereMesh.position.set(...s.pos);
      outerTrackGroup.add(sphereMesh);
    });

    // --- 4. Sparkles (80 Golden Particle Points) ---
    const sparkleCount = 80;
    const sparkleGeo = new THREE.BufferGeometry();
    const sparklePositions = new Float32Array(sparkleCount * 3);
    for (let i = 0; i < sparkleCount; i++) {
      sparklePositions[i * 3] = (Math.random() - 0.5) * 7.5;
      sparklePositions[i * 3 + 1] = (Math.random() - 0.5) * 5.2;
      sparklePositions[i * 3 + 2] = (Math.random() - 0.5) * 3.0;
    }
    sparkleGeo.setAttribute('position', new THREE.BufferAttribute(sparklePositions, 3));

    const sparkleMat = new THREE.PointsMaterial({
      color: 0xf3d894,
      size: 0.04,
      transparent: true,
      opacity: 0.85,
    });
    const sparklePoints = new THREE.Points(sparkleGeo, sparkleMat);
    rootGroup.add(sparklePoints);

    // --- 5. Contact Shadow Disk on Floor ---
    const shadowGeo = new THREE.PlaneGeometry(5, 5);
    // Radial gradient texture for soft contact shadow
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(42, 10, 16, 0.45)');
      gradient.addColorStop(0.5, 'rgba(42, 10, 16, 0.2)');
      gradient.addColorStop(1, 'rgba(42, 10, 16, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(canvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -2.7;
    scene.add(shadowMesh);

    // --- Mouse & Pointer Tracking ---
    let pointerX = 0;
    let pointerY = 0;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointerY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        toothMesh.rotation.y += deltaX * 0.015;
        toothMesh.rotation.x += deltaY * 0.015;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Touch Support for Mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0 && isDragging) {
        const t = e.touches[0];
        const deltaX = t.clientX - prevMouseX;
        const deltaY = t.clientY - prevMouseY;
        toothMesh.rotation.y += deltaX * 0.015;
        toothMesh.rotation.x += deltaY * 0.015;
        prevMouseX = t.clientX;
        prevMouseY = t.clientY;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Float effect
      floatGroup.position.y = Math.sin(elapsed * 0.9) * 0.14;

      // Inner Ring spin
      innerRingMesh.rotation.z -= delta * 0.22;

      // Outer Track spin
      outerTrackGroup.rotation.z += delta * 0.45;

      // Sparkles gentle drift
      sparklePoints.rotation.y = elapsed * 0.05;

      // Tooth rotation & interactive lerping
      if (!isDragging) {
        toothMesh.rotation.y += delta * 0.38;
        toothMesh.rotation.x = THREE.MathUtils.lerp(
          toothMesh.rotation.x,
          pointerY * 0.32,
          0.06
        );
        toothMesh.rotation.z = THREE.MathUtils.lerp(
          toothMesh.rotation.z,
          pointerX * 0.14,
          0.06
        );
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchstart', handleTouchStart);
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
      toothGeometry.dispose();
      toothMaterial.dispose();
      innerRingGeo.dispose();
      innerRingMat.dispose();
      outerTrackGeo.dispose();
      outerTrackMat.dispose();
      sparkleGeo.dispose();
      sparkleMat.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      shadowTex.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full cursor-grab active:cursor-grabbing select-none"
      title="Drag to rotate 3D tooth"
    />
  );
}
