window.pixEngine = window.pixEngine || {};
pixEngine.Engine = function(options) {
  this.counter = 0;
  this.entities = [];
  this.renderer = options.renderer;
  this.stage = options.stage
}

pixEngine.Engine.prototype.gameloop = function() {
  requestAnimFrame(this.gameloop.bind(this));
  this.counter++;
  for(var i in this.entities) {
    this.entities[i].tick(this.counter);
  }
  this.renderer.render(this.stage);
}

pixEngine.Engine.prototype.addEntity = function(entity) {
  this.entities.push(entity)
}
