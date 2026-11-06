class ProductComponent {
  private iva: number = 0.21;

  constructor(public nombreProducto: string, private precioBase: number) {}

  public obtenerPrecioFinal(): number {
    const precioDelIva = this.precioBase * this.iva;
    return this.precioBase + precioDelIva;
  }
}
