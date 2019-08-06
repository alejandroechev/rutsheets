# RUT Sheets

## English description
GSheets script to generate and verify chilean national identity numbers (RUT).

Usage:

To generate a new random RUT type: **=RUT()** in a cell. This will generate a valid random RUT 
from 1.000.000 to 100.000.000 with its verification digit.


To generate the verification digit for a RUT type: **=RUTDIGIT(*rutnumber*)** where *rutnumber*
is the RUT for which you want the verification digit.

To verify if a RUT has a valid verification digt type: **=VERIFYRUT(*rutnumber*, *digit*)** 
where *rutnumber* is the RUT and *digit* the verification digit you want to verify. 
This will return TRUE if the RUT is valid, FALSE otherwise.

## Spanish description
Script de Google Sheets para generar y verificar RUTs, números nacionales de identidad de Chile.

Uso:

Para generar un nuevo RUT escribe: **=RUT()** en una celda. Esto generará un RUT válido entre 
1.000.000 y 100.000.000 con su dígito verficador.


Para generar el dígito verificador de un RUT escribe: **=DIGITORUT(*rut*)** donde *rut* es el
numero al cual quieres generarle un dígito verificador.

Para verificar que un RUT tiene un dígito verificador válido escribe 
**=VERIFICARUT(*rut*, *digito*)**,  donde *rut* es el número del RUT y *digito* el digito 
verificador. 
Esto retornará VERDADERO si el RUT es válido, FALSO en otro caso.

