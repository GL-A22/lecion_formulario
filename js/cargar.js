/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function cargar_datos(){
    
    var nombre = $('#empleado_').val();
    var cargo = $('#cargo_').val();
    var valor_h = $('#valor_h_').val();
    var num_h = $('#num_h_').val();
    
    if(valor_h > 0 && num_h > 0 ){
        
      var resp = valor_h * num_h;
      
      alert("El valor de su hora sus horas de trabajo señor: " +nombre+ " es de: "+resp);
    
}


