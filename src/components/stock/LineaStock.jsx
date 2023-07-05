import stock from "./stock";
import { BotonCheckBox } from "../botonCheckbox";

const LineaStock = () => {
  return (
    <tbody>
      {stock.map((usuario) => {
        return (
          <tr>
            <td className="centrado">
              <BotonCheckBox />
            </td>
            <td> {usuario.id} </td>
            <td>{usuario.cantidad}</td>
            <td className="centrado">{usuario.cantidad_minima}</td>
            <td> {usuario.tipo}</td>
            <td> {usuario.descripcion}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default LineaStock;
