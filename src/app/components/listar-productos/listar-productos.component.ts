import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent implements OnInit {
  listProductos:Producto[]=[];

constructor(private _productoService:ProductoService, private toastr:ToastrService){}

ngOnInit(): void {
this.obtenerProductos();
}

obtenerProductos(){
  this._productoService.getProductos().subscribe(data => {
console.log(data);
this.listProductos=data;
  },error=>{
    console.log(error);
  });
}

eliminarProducto(id:any){
  this._productoService.eliminarProducto(id).subscribe(data=>{
    this.toastr.error('producto eliminado con exito',id);
    this.obtenerProductos();
  },error=>{
    console.log(error);
  }); 
}
}
