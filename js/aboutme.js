$(function(){
$.firefly({
  on: '#firefly'
}); 
$.firefly({
  total: 20,
  ofTop: 0,
  ofLeft: 0,
  on: 'document.body', 
  twinkle: 0.2, 
  minPixel: 3,
  maxPixel: 4,
  color: '#fff',
  namespace: 'jqueryFireFly', 
  zIndex: Math.ceil(Math.random() * 20) - 1,
  borderRadius: '50%',
  _paused: false
});	
})
