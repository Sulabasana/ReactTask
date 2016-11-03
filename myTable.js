import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
 
class MyTable extends React.Component {
 
  constructor(props) {
    super(props);
    this.rows = [{"ID": 1, "User_name": "Shelley", "Post_title": "Pointe-Claire", "Views": "8221", "Likes": "5098", "Created_at": "10/09/16"},
  {"ID": 2, "User_name": "Shelby", "Post_title": "Sint-Agatha-Berchem", "Views": "2560", "Likes": "1869", "Created_at": "31/01/16"},
  {"ID": 3, "User_name": "Nadine", "Post_title": "Legal", "Views": "7170", "Likes": "5214", "Created_at": "30/01/17"},
  {"ID": 4, "User_name": "Freya", "Post_title": "Katowice", "Views": "3579", "Likes": "3274", "Created_at": "21/01/16"},
  {"ID": 5, "User_name": "Destiny", "Post_title": "Jodoigne", "Views": "7126", "Likes": "4698", "Created_at": "15/08/17"},
  {"ID": 6, "User_name": "Eric", "Post_title": "Stockerau", "Views": "9048", "Likes": "1885", "Created_at": "01/05/17"},
  {"ID": 7, "User_name": "Alika", "Post_title": "Neu-Isenburg", "Views": "2993", "Likes": "6713", "Created_at": "30/12/16"},
  {"ID": 8, "User_name": "Mufutau", "Post_title": "Puerto Montt", "Views": "8940", "Likes": "1665", "Created_at": "03/09/17"},
  {"ID": 9, "User_name": "Regan", "Post_title": "Nimy", "Views": "8213", "Likes": "6094", "Created_at": "29/02/16"},
  {"ID": 10, "User_name": "Pamela", "Post_title": "Vilcún", "Views": "9237", "Likes": "8398", "Created_at": "24/04/16"},
  {"ID": 11, "User_name": "Thor", "Post_title": "Meldert", "Views": "6231", "Likes": "6508", "Created_at": "12/04/16"},
  {"ID": 12, "User_name": "Stone", "Post_title": "Pretoro", "Views": "6119", "Likes": "7676", "Created_at": "07/08/16"},
  {"ID": 13, "User_name": "Vernon", "Post_title": "Limón (Puerto Limón)", "Views": "9415", "Likes": "1452", "Created_at": "26/05/16"},
  {"ID": 14, "User_name": "Gay", "Post_title": "Madison", "Views": "6573", "Likes": "6206", "Created_at": "15/02/17"},
  {"ID": 15, "User_name": "George", "Post_title": "Ch‰tillon", "Views": "3555", "Likes": "5184", "Created_at": "16/05/17"},
  {"ID": 16, "User_name": "Kristen", "Post_title": "Huntley", "Views": "2470", "Likes": "1528", "Created_at": "31/05/17"},
  {"ID": 17, "User_name": "Shelby", "Post_title": "Richmond Hill", "Views": "1968", "Likes": "4449", "Created_at": "28/01/17"},
  {"ID": 18, "User_name": "Marsden", "Post_title": "Harnoncourt", "Views": "8173", "Likes": "8755", "Created_at": "17/07/16"},
  {"ID": 19, "User_name": "Camilla", "Post_title": "Valcourt", "Views": "6825", "Likes": "7227", "Created_at": "08/08/16"},
  {"ID": 20, "User_name": "Galvin", "Post_title": "Clackmannan", "Views": "5603", "Likes": "2430", "Created_at": "11/04/16"},
  {"ID": 21, "User_name": "Rhea", "Post_title": "Dubuisson", "Views": "5990", "Likes": "6638", "Created_at": "02/03/17"},
  {"ID": 22, "User_name": "Amaya", "Post_title": "LiŽge", "Views": "9750", "Likes": "5972", "Created_at": "14/02/16"},
  {"ID": 23, "User_name": "Chelsea", "Post_title": "Sirsa", "Views": "6766", "Likes": "9876", "Created_at": "14/06/17"},
  {"ID": 24, "User_name": "Ruth", "Post_title": "Baschi", "Views": "8590", "Likes": "7171", "Created_at": "10/06/17"},
  {"ID": 25, "User_name": "Deanna", "Post_title": "Brampton", "Views": "3536", "Likes": "5359", "Created_at": "07/11/15"},
  {"ID": 26, "User_name": "Kaseem", "Post_title": "La Thuile", "Views": "6108", "Likes": "3058", "Created_at": "12/11/16"},
  {"ID": 27, "User_name": "Inez", "Post_title": "Davoli", "Views": "9846", "Likes": "1995", "Created_at": "01/09/16"},
  {"ID": 28, "User_name": "Keith", "Post_title": "Akşehir", "Views": "3911", "Likes": "1552", "Created_at": "01/05/17"},
  {"ID": 29, "User_name": "Hector", "Post_title": "Chesterfield", "Views": "7308", "Likes": "8157", "Created_at": "27/05/17"},
  {"ID": 30, "User_name": "Kiayada", "Post_title": "OffIDa", "Views": "2431", "Likes": "8552", "Created_at": "14/01/16"},
  {"ID": 31, "User_name": "Jason", "Post_title": "Corby", "Views": "9728", "Likes": "1273", "Created_at": "16/05/16"},
  {"ID": 32, "User_name": "Gay", "Post_title": "Goiânia", "Views": "4733", "Likes": "2514", "Created_at": "27/08/16"},
  {"ID": 33, "User_name": "Sonya", "Post_title": "Alma", "Views": "2899", "Likes": "9764", "Created_at": "12/01/16"},
  {"ID": 34, "User_name": "Kylee", "Post_title": "Newcastle", "Views": "7653", "Likes": "3456", "Created_at": "23/07/16"},
  {"ID": 35, "User_name": "Alvin", "Post_title": "Prince George", "Views": "6549", "Likes": "1754", "Created_at": "09/12/16"},
  {"ID": 36, "User_name": "Stewart", "Post_title": "Saint-Maur-des-Fossés", "Views": "2920", "Likes": "5157", "Created_at": "21/09/17"},
  {"ID": 37, "User_name": "India", "Post_title": "Le Grand-Quevilly", "Views": "4798", "Likes": "9451", "Created_at": "28/10/16"},
  {"ID": 38, "User_name": "Alexandra", "Post_title": "Hines Creek", "Views": "8858", "Likes": "9406", "Created_at": "30/12/16"},
  {"ID": 39, "User_name": "Ursa", "Post_title": "Fusignano", "Views": "8642", "Likes": "3210", "Created_at": "11/03/17"},
  {"ID": 40, "User_name": "Quyn", "Post_title": "San Juan (San Juan de Tibás)", "Views": "9586", "Likes": "3141", "Created_at": "26/10/16"},
  {"ID": 41, "User_name": "Derek", "Post_title": "Neunkirchen", "Views": "5308", "Likes": "4117", "Created_at": "04/12/16"},
  {"ID": 42, "User_name": "Yoshio", "Post_title": "Oliver", "Views": "6033", "Likes": "1615", "Created_at": "23/08/17"},
  {"ID": 43, "User_name": "Elliott", "Post_title": "Naumburg", "Views": "6002", "Likes": "3960", "Created_at": "06/06/16"},
  {"ID": 44, "User_name": "Hannah", "Post_title": "Genzano di Lucania", "Views": "9285", "Likes": "2418", "Created_at": "11/08/17"},
  {"ID": 45, "User_name": "Jolie", "Post_title": "Henley-on-Thames", "Views": "8475", "Likes": "2387", "Created_at": "05/10/16"},
  {"ID": 46, "User_name": "Chiquita", "Post_title": "Aklavik", "Views": "8913", "Likes": "7247", "Created_at": "15/03/17"},
  {"ID": 47, "User_name": "Kelsey", "Post_title": "Bellefontaine", "Views": "5241", "Likes": "4893", "Created_at": "15/08/17"},
  {"ID": 48, "User_name": "Rhona", "Post_title": "Saint John", "Views": "9431", "Likes": "2970", "Created_at": "10/07/17"},
  {"ID": 49, "User_name": "Gavin", "Post_title": "Lochgilphead", "Views": "6279", "Likes": "4480", "Created_at": "09/04/17"},
  {"ID": 50, "User_name": "Martena", "Post_title": "Neustadt", "Views": "3614", "Likes": "1911", "Created_at": "05/07/16"}] 
    this.state = {
      filteredDataList: this.rows
             
    };
  }
  _renderHeader(label, cellDataKey) {
  return <div>
        <span>{label}</span>
          <div>
            <br />
            <input style={{width:90+'%'}} onChange={this._onFilterChange.bind(this, cellDataKey)}/>
          </div>
      </div>;
}
 
_onFilterChange(cellDataKey, event) {
  if (!event.target.value) {
    this.setState({
      filteredDataList: this.rows,
    });
  }
  var filterBy = event.target.value.toString().toLowerCase();
  var size = this.rows.length;
  var filteredList = [];
  for (var index = 0; index < size; index++) {
    var v = this.rows[index][cellDataKey];
    if (v.toString().toLowerCase().indexOf(filterBy) !== -1) {
      filteredList.push(this.rows[index]);
    }
  }
  this.setState({
    filteredDataList: filteredList,
  });
}
  render() {
      return <Table
        height={40+((this.rows.length+1) * 30)}
        width={1150}
        rowsCount={this.rows.length}
        rowHeight={30}
        headerHeight={30}
        rowGetter={function(rowIndex) {return this.rows[rowIndex]; }.bind(this)}>
        <Column dataKey="ID" width={50} label="ID" headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="User_name" width={200} label="User name" />
        <Column  dataKey="Post_title" width={200} label="Post title" />
        <Column  dataKey="Views" width={200} label="Views" />
        <Column  dataKey="Likes" width={200} label="Likes" />
        <Column  dataKey="Created_at" width={300} label="Created at" />
      </Table>;
  }
}
 
module.exports = MyTable;