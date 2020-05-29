<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Producto;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Response;
use Faker\Generator;


date_default_timezone_set('America/Bogota');

class ControllerProduct extends Controller
{
	
	public function get_all(){
	     return Producto::all();      
	}

	public function create(Request $request){

		$time1  = date("Y-m-d");
		$time2  = date("Y-m-d  h:i:s");
		$nombre = trim($request->input('nombre'));
		$ref    = trim($request->input('referencia'));
		$precio = trim($request->input('precio'));
		$peso   = trim($request->input('peso'));
		$stock  = trim($request->input('stock'));

	  $insert = DB::insert('INSERT INTO producto (nombre,referencia,precio,peso,stock,fecha_creacion,fecha_actualizacion) VALUES (?, ?, ?, ?, ?, ?, ?)', [
	  						$nombre, 
	  						$ref, 
	  						$precio, 
	  						$peso,
	  						$stock,
	  						$time1,
	  						$time2
	  					]);
	 
      // Producto::insert([
      //   'nombre' => $request->input('nombre'),
      //   'referencia' => $request->input('referencia'),
      //   'precio' => $request->input('precio'),
      //   'peso' => $request->input('peso'),
      //   'stock' => $request->input('stock')
      // ]);

      return [ 'message' => "Guardo exitosamente",
      			    'success' => 'true' ];

      //return $response;
    }

    public function Actualizar(Request $request)
    {
        
        $stock =  trim($request->get('stock'));
        $Idb   =  trim($request->get('id')); 
        DB::update('UPDATE producto SET stock = ? WHERE id = ?',[$stock,$Idb]);
        return;
         
    }

   public function eliminar(Request $request)
    {
        
        $Idb   =  trim($request->get('dataInfo')); 
        DB::update('DELETE FROM producto WHERE id = ?',[$Idb]);
        return;
        
    }

}
