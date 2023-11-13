AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `fish${i}`;
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 5;
        const posZ = Math.random() * 60 + -40;
        const position = { x: posX, y: posY, z: posZ };
        this.genFish(id, position);
      }
    },
    genFish: function (id, position) {
      const fModEntity = document.querySelector("#fMod");
      var fishel = document.createElement("a-entity");
      fishel.setAttribute("id", id);
      fishel.setAttribute("position", position);
      fishel.setAttribute("rotation", { x: 0, y: 180, z: 0 });
      fishel.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });
      fishel.setAttribute("gltf-model", "./assets/fish/scene.gltf");
      fishel.setAttribute("animation", {
        property: "position",
        to: "100 10 -20",
        loop: "true",
        dur: 20000
      });
      fishel.setAttribute("animation-mixer", {});
      fModEntity.appendChild(fishel);
    }
  })