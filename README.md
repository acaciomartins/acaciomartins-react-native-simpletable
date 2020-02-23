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
