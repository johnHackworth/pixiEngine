function isoTile(backgroundColor, borderColor, w, h, total_width, total_height) {
    var h_2 = h/2;

    return function(x, y) {
        var graphics = new PIXI.Graphics();
        // stage.addChild(graphics);
        graphics.beginFill(backgroundColor);
        graphics.lineStyle(1, borderColor, 1);
        graphics.moveTo(x, y);
        graphics.lineTo(x + w, y + h_2);
        graphics.lineTo(x, y + h);
        graphics.lineTo(x - w, y + h_2);
        graphics.lineTo(x , y);
        graphics.endFill();
        graphics.setInteractive(true);
        graphics.tick = function() {
          this.x += this.speed;
          this.y += this.fall / 10;
          if(this.x > 2* total_width) {
            this.x = -1 * total_width;
          }
          if(this.y > total_height - 50) {
            this.y = total_height - 50;
          }
        }
        return graphics;
    }
}
var tileWidth = 10;
var tileHeight = 10;

var grass = isoTile(0x80CF5A, 0x339900, tileWidth, tileHeight, 1200, 600);
var dirt = isoTile(0x96712F, 0x403014, tileWidth, tileHeight, 1200, 600);
var water = isoTile(0x85b9bb, 0x476263, tileWidth, tileHeight, 1200, 600);
