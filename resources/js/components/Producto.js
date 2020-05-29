import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = "productos/list";

export default class Producto extends Component {
    constructor(props){
      super(props);
      this.state = {
        producto:[],
        productoBackup:[],
        textBuscar:'',
        formNombre:'',
        formRef:'',
        formPrecio:'',
        formPeso:'',
        formCantidad:'',
        CantidadUpdate:0,
        Restante:0,
        idUpdate: '',
        CostoStock:'',
      }


      this.handleChangeNombre     = this.handleChangeNombre.bind(this);
      this.handleChangeRef        = this.handleChangeRef.bind(this);
      this.handleChangePreci      = this.handleChangePreci.bind(this);
      this.handleChangePeso       = this.handleChangePeso.bind(this);
      this.handleChangeCantidad   = this.handleChangeCantidad.bind(this);
      this.changueCantidad        = this.changueCantidad.bind(this);
      this.CharguerData           = this.CharguerData.bind(this);

    }
    componentDidMount(){

      

      axios.get(baseUrl).then(response=>{
        this.setState({
            producto:response.data,
            productoBackup:response.data
          })
      }).catch(error=>{
        alert("Error "+error)
      })

    }

    
    handleChangeNombre(event) {
      this.setState({formNombre: event.target.value});
    }

    handleChangeRef(event) {
      this.setState({formRef: event.target.value});
    }

    handleChangePreci(event) {
      this.setState({formPrecio: event.target.value});
    }

    handleChangePeso(event) {
      this.setState({formPeso: event.target.value});
    }

    handleChangeCantidad(event) {
      this.setState({formCantidad: event.target.value});
    }

    DeleteData(info){

      alert('Vas a eliminar '+ info.nombre );

      var UrlDelete = 'productos/DeleteData';
      axios.get(UrlDelete,{params: {dataInfo: info.id}}).then(response=>{
          this.componentDidMount()
      });
      this.componentDidMount()
    } 

    CharguerData(info){
      
      var Cantidad = parseInt(info.stock);
      if (Cantidad != 0) {
    
        document.getElementById("resul_cost").innerHTML = '';
        var input = document.getElementById("cantidad_number").max = Cantidad;
        var x = " Max "+Cantidad+"<b> C/U : "+info.precio+"</b>";
        document.getElementById("info_number").innerHTML = x;
         this.setState({CantidadUpdate: 0});
        
         this.setState({idUpdate:  info.id});
         this.setState({CostoStock:  info.precio});
          
      }else{
        alert('Este productono tiene items disponibles');
        $("#exampleModal2").modal("hide");
      }
    }

    changueCantidad(){

      var input2 = parseInt($("#cantidad_number").val());  
      var maix   = parseInt($("#cantidad_number").attr('max'));    
       
      if (input2 <= maix  ) {

         var restante = maix - input2; 
         this.setState({CantidadUpdate:   event.target.value});
         this.setState({Restante: restante});

         var Total = input2 * parseInt(this.state.CostoStock);
         var html  = "<b>Total : "+input2+" = "+Total+"</b>";
         document.getElementById("resul_cost").innerHTML = html;
        
      }else if( input2 > maix ) {
        alert('No puede ingresar mas de la Cantidad Maxima');
        $("#cantidad_number").val(maix)
      }else if( input2 < 0 ){
        $("#cantidad_number").val(0)
      }
    }

    UpdateDataInfo(){

      // const updateData = new updateData()

      // updateData.append('id',this.state.idUpdate )
      // updateData.append('stock',this.state.Restante)
      var Taru = 'productos/Actualizar';

      axios.get(Taru,{params:{id:this.state.idUpdate,stock:this.state.Restante}}).then(
      response=>{
      
          this.componentDidMount()
          $("#exampleModal2").modal("hide");
          alert('Venta Exitosa');


      }).catch(error =>{
          this.errors = 'Corrija para poder editar con éxito';
      });

      this.componentDidMount()
          // $("#exampleModal2").modal("hide");
          // alert('Venta Exitosa');
    }

    sendNetworkProduct(){

      const formData = new FormData()
      formData.append('nombre',this.state.formNombre)
      formData.append('referencia',this.state.formRef)
      formData.append('precio',this.state.formPrecio)
      formData.append('peso',this.state.formPeso)
      formData.append('stock',this.state.formCantidad)
      var Ruta = 'productos/create';
      axios.post(Ruta,formData).then(response=>{

           if (response.data.success==true) {
             alert(response.data.message)
             // cargar datos de nuevo
             this.componentDidMount()
             $("#exampleModal").modal("hide");
           }

       }).catch(error=>{
         alert("Error "+error)
       })

       //alert(response.data.message)
             // cargar datos de nuevo
             this.componentDidMount()
             $("#exampleModal").modal("hide");
          

    }

    render() {
        return (
          <div className="container">
          
            <h3>Laravel y React APIRest</h3>
            <hr/>
           
            <button type="button" className="btn btn-primary col-md-4" data-toggle="modal" data-target="#exampleModal">
                Crear producto
            </button>

            <table className="table table-bordered order-table ">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Referencia</th>
                  <th>Precio</th>
                  <th>Peso</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody id="bodytable">
                  {this.renderList()}
              </tbody>
            </table>

            <form>
            <div ref="putomodal" className="modal fade" id="exampleModal2"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabe2l">Venta de producto</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                     
                    <div className="form-group">
                     <p id="info_number" ></p>
                     <label id="resul_cost" ></label>
                    </div>
                    <div className="form-group">
                     <label >Stock (Cantidad)</label>
                     <input id="cantidad_number" type="number" max="0" min="0" value={this.state.CantidadUpdate} onChange={this.changueCantidad} className="form-control"  />
                    </div>

                  </div>
                  <div className="modal-footer"> 
                    <button type="button" className="btn btn-primary" onClick={()=>this.UpdateDataInfo()}>Vender</button>
                  </div>
                </div>
              </div>
            </div>
            </form>

            <form>
            @csrf 
            <div ref="putomodal" className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Formulario de producto</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                     <label >Nombre de producto </label>
                     <input type="text" className="form-control" value={this.state.formNombre} onChange={this.handleChangeNombre} />
                    </div>
                    <div className="form-group">
                     <label >Referencia del producto</label>
                     <textarea className="form-control" rows="3" value={this.state.formRef} onChange={this.handleChangeRef}></textarea>
                    </div>
                    <div className="form-group">
                     <label >Precio</label>
                     <input type="number" className="form-control" value={this.state.formPrecio} onChange={this.handleChangePreci} />
                    </div>
                    <div className="form-group">
                     <label >Peso</label>
                     <input type="number" className="form-control" value={this.state.formPeso} onChange={this.handleChangePeso} />
                    </div>
                    <div className="form-group">
                     <label >Stock (Cantidad)</label>
                     <input type="number" className="form-control" value={this.state.formCantidad} onChange={this.handleChangeCantidad} />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary" onClick={()=>this.sendNetworkProduct()}>Guardar</button>
                  </div>
                </div>
              </div>
            </div>
            </form>

          </div>
        );
    }

    renderList(){

      return this.state.producto.map((dataInfo)=>{

        return(
          <tr  >
            <td>{dataInfo.nombre}</td>
            <td>{dataInfo.referencia}</td>
            <td>{dataInfo.precio}</td>
            <td>{dataInfo.peso}</td>
            <td>{dataInfo.stock}</td>
            <td>
                <button type="button" className="btn btn-danger"  onClick={() => this.DeleteData(dataInfo)} > 
                  Eliminar 
                </button>
            </td>
            <td> 
                <button type="button" className="btn btn-primary" onClick={() => this.CharguerData(dataInfo)} data-toggle="modal" data-target="#exampleModal2">
                  Vender
                </button>
            </td>  
          </tr>
        )

      })

    }
}

if (document.getElementById('producto')) {
    ReactDOM.render(<Producto />, document.getElementById('producto'));
}