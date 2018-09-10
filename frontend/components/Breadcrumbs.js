import React, { Component } from 'react'
import { Breadcrumb } from "bloomer/lib/components/Breadcrumb/Breadcrumb";
import { BreadcrumbItem } from "bloomer/lib/components/Breadcrumb/BreadcrumbItem";

export default class Breadcrumbs extends Component {
  render() {
    return (
      <Breadcrumb>
        <ul>
            <BreadcrumbItem><a>Overview</a></BreadcrumbItem>
            <BreadcrumbItem><a>All jobs</a></BreadcrumbItem>
            <BreadcrumbItem isActive><a>Breadcrumb</a></BreadcrumbItem>
        </ul>
      </Breadcrumb>
    )
  }
}
