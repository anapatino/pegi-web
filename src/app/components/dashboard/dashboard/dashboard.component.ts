import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

interface Item {
  icon?: string;
  expandable: boolean;
  label: string;
  level: number;
  route: string;
}

interface ItemNode {
  icon?: string;
  label: string;
  children?: ItemNode[];
  route?: string;
}

const TREE_DATA: ItemNode[] = [
  {
    icon: 'person-fill',
    label: 'Perfil',
    children: [
      {
        label: 'registrar cv',
        route: 'registerCv',
      },
      {
        label: 'consultar cv',
      },
    ],
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private _transformer = (node: ItemNode, level: number): Item => {
    return {
      expandable: !!node.children && node.children.length > 0,
      label: node.label,
      level: level,
      route: node.route ?? '',
      icon: node.icon,
    };
  };

  treeControl = new FlatTreeControl<Item>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {}
  hasChild = (_: number, node: Item) => node.expandable;
}
