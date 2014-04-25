window.pixEngine = window.pixEngine || {};

pixEngine.Stage = function(options) {
  this.pixiStage = new PIXI.Stage(0xEEFFFF, true);
  // let pixi choose WebGL or canvas
  this.renderer = PIXI.autoDetectRenderer(
    options.width,
    options.height
  );
  this.engine = new window.pixEngine.Engine({
    renderer: this.renderer,
    stage: this.pixiStage
  });
  this.initStage = options.init;
}

pixEngine.Stage.prototype.init = function() {
  document.body.appendChild(this.renderer.view);
  this.initStage(this);
  this.engine.gameloop();
}

pixEngine.Stage.prototype.addEntity = function(entity) {
  this.pixiStage.addChild(entity);
  this.engine.addEntity(entity);
}
