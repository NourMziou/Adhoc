import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
interface FoodNode {
  name: string ;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Boutique',
    children: [
      {name: 'Code'},
      {name: 'Nom'},

    ]
  }, {
    name: 'Produit',
    children: [
      {
        name: 'Nom',

      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  x : number | undefined;saleData: any[] | undefined;
  column: any | undefined;
  customColors!: { name: string; value: string; }[];
  do(){
    this.column=this.chart();
  }
 
  chart(){


    this.customColors = [
    {
      name: "Mobiles",
      value: '#0000ff'
    },
    {
      name: "sofa",
      value: '#0000ff'
    },
    {
      name: "car",
      value: '#0000ff'
    },
    {
      name: "Laptop",
      value: '#0000ff'
    }, {
      name: "AC",
      value: '#0000ff'
    },
    {
      name: "Headset",
      value: '#0000ff'
    },
    {
      name: "Fridge",
      value: '#0000ff'
    },
    {
      name: "telephone",
      value: '#0000ff'
    },
    {
      name: "chair",
      value: '#0000ff'
    },
    {
      name: "bike",
      value: '#0000ff'
    },
    {
      name: "aeroplane",
      value: '#0000ff'
    }
  ];
  // saleData;
 
  

 
    this.x = Math.floor((Math.random() * 100000) + 1);
    this.saleData = [
    { name: "Mobiles", value: 9000 }, { name: "sofa", value: 2300 }, { name: "car", value: 2600 },
    { name: "Laptop", value: 550 },
    { name: "AC", value: 1500 },
    { name: "Headset", value: 1900 },
    { name: "Fridge", value: 1000 },

    { name: "telephone", value: 2400 },
    { name: "chair", value: 2500 },

    { name: "bike", value: 700 },
    { name: "aeroplane", value: 2800 }

  ]; }
  




  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}

