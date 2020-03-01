<h1>@acaciomartins/react-native-simpletable</h1>

A React Native Simple Table is a component React Native.

<h1>Instructions to Install</h1>

```npm install @acaciomartins/react-native-simpletable```

<h1>Instructions to Usage</h1>

```javascript
import SimpleTable from '@acaciomartins/react-native-simpletable';
```

```javascript
const headerName = [{ name: "Name", size: 70 }, { name: "Description", size: 120 }, { name: "Amount", size: 80 }, { name: "Price", size: 70 }];
const columnName = ["name", "description", "amount", "price"];
const tableData = [
  { name: "Product 1", description: "Description Product 1", price: "1,99", amount: "1" }, 
  { name: "Product 2", description: "Description Product 2", price: "2,99", amount: "2" }];
    
<SimpleTable
    data={tableData}
    headerName={headerName}
    columnName={columnName}
/>
```

**Props**
<ul>
<li>data</li>
<li>headerName</li>
<li>columnName</li>
</ul>
<table>
  <thead>
    <th>Prop</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    <th>Example</th>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
      <td>Array</td>
      <td>-</td>
      <td>Data displayed in the table</td>
      <td>[{ name: "Product 1", description: "Description Product 1", price: "1,99", amount: "1" },{ name: "Product 2", description: "Description Product 2", price: "2,99", amount: "2" }]</td>
    </tr>    
    <tr>
      <td>headerName</td>
      <td>Array</td>
      <td>-</td>
      <td>Headers names and headers size</td>
      <td>[{ name: "Name", size: 70 }, { name: "Description", size: 120 }, { name: "Amount", size: 80 }, { name: "Price", size: 70 }]</td>
    </tr>
     <tr>
      <td>columnName</td>
      <td>Array</td>
      <td>-</td>
      <td>Columns names</td>
       <td>["name", "description", "amount", "price"]</td>
    </tr>
  </tbody>
