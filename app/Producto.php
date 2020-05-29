<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
 protected $table='producto';
 protected $filliable=['nombre','referencia','precio','peso','stock','fecha_creacion','fecha_actualizacion'];

}
