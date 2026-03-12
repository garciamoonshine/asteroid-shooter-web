function rand(a,b){return Math.random()*(b-a)+a;}
function randInt(a,b){return Math.floor(rand(a,b));}
function wrapPos(x,y,W,H){return{x:((x%W)+W)%W,y:((y%H)+H)%H};}
function dist(ax,ay,bx,by){return Math.hypot(ax-bx,ay-by);}
function circlesCollide(ax,ay,ar,bx,by,br){return dist(ax,ay,bx,by)<ar+br;}