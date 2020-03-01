<h1>@acaciomartins/react-native-simpletable</h1>

A React Native Simple Table is a component React Native.

<h1>Instructions to Install</h1>

```npm install @acaciomartins/react-native-simpletable```

<h1>Instructions to Usage</h1>

```javascript
import SimpleTable from '@acaciomartins/react-native-simpletable';
```

```javascript
const headerData = [{ name: "Name", size: 70 }, { name: "Description", size: 120 }, { name: "Amount", size: 80 }, { name: "Price", size: 70 }];
const columnData = ["name", "description", "amount", "price"];
const tableData = [
  { name: "Product 1", description: "Description Product 1", price: "1,99", amount: "1" }, 
  { name: "Product 2", description: "Description Product 2", price: "2,99", amount: "2" }];
    
<SimpleTable
    data={tableData}
    headerData={headerData}
    columnData={columnData}
/>
```

**Props**
<ul>
<li>data</li>
<li>headerData</li>
<li>columnData</li>
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
      <td>headerData</td>
      <td>Array</td>
      <td>-</td>
      <td>Columns names and columns size</td>
      <td>[{ name: "Name", size: 70 }, { name: "Description", size: 120 }, { name: "Amount", size: 80 }, { name: "Price", size: 70 }]</td>
    </tr>
     <tr>
      <td>columnData</td>
      <td>Array</td>
      <td>-</td>
      <td>Columns names</td>
       <td>["name", "description", "amount", "price"]</td>
    </tr>
  </tbody>
