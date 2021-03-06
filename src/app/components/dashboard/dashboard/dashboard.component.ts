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
    icon: 'house-fill',
    label: 'Principal',
    route: 'homePage',
  },
  {
    icon: 'person-fill',
    label: 'Perfil',
    children: [
      {
        label: 'Registrar cv',
        route: 'registerCv',
      },
      {
        label: 'Consultar cv',
        route: 'searchCv',
      },
    ],
  },
  {
    icon: 'clipboard-fill',
    label: 'Propuesta',
    children: [
      {
        label: 'Registrar Propuesta',
        route: 'registerProposal',
      },
      {
        label: 'Listado de Propuestas',
        route: 'searchProposal',
      },
    ],
  },
  {
    icon: 'stack',
    label: 'Proyecto',
    children: [
      {
        label: 'Registrar Proyecto',
        route: 'registerProject',
      },
      {
        label: 'Listado de Proyectos',
        route: 'searchProject',
      },
    ],
  },
  {
    icon: 'people-fill',
    label: 'Asesores',
    children: [
      {
        label: 'Registrar Tutores',
        route: 'registerAssesor',
      },
      {
        label: 'Consultar Tutores',
        route: 'searchAssesor',
      },
    ],
  },
  {
    icon: 'text-left',
    label: 'Lineas de Investigacion',
    children: [
      {
        label: 'Registrar Lineas',
        route: 'registerLines',
      },
      {
        label: 'Consultar Lineas',
        route: 'searchLines',
      },
    ],
  },
  {
    icon: 'person-check-fill',
    label: 'Evaluadores',
    children: [
      {
        label: 'Registrar Evaluadores',
        route: 'registerEvaluators',
      },
      {
        label: 'Consultar Evaluadores ',
        route: 'searchEvaluators',
      },
    ],
  },
  {
    icon: 'box-arrow-in-right',
    label: 'Salir',
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
