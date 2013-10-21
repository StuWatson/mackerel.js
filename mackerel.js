var Mackerel = (function(win, undefined){
  var Mackerel = {
    eats: ["Small finfish", "Squid", "Pelagic Crustaceans", "Base"],
    
    isFish: function(){
      return true;
    },
    canFly: function(){
      return false;
    },
    canSwim: function(){
      return true;
    },
    canBreathe: function(parameters) {
      if(parameters.isUnderWater) return true;
      return false;
    }
    eat: function(parameters) {
      if(this.eats.indexOf(parameters)!=-1) return "Mackerel ate "+parameters;
      return "Mackeral does not eat "+parameters;
    }
  };
  
  return Mackerel;

}(this));
