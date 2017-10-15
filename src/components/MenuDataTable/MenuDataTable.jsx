import React from 'react';
import { withStyles } from 'material-ui/styles';
import {
  FilteringState,
  LocalFiltering,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  TableView,
  TableHeaderRow,
  TableFilterRow,
} from '@devexpress/dx-react-grid-material-ui';

import Menu from '../../models/Menu.model';
import s from './MenuDataTable.css';

class MenuDataTable extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'description', title: 'Description' },
      ],
      rows: props.menu,
    };
  }
  render() {
    const { rows, columns } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <FilteringState defaultFilters={[]} />
        <LocalFiltering />
        <TableView />
        <TableHeaderRow />
        <TableFilterRow />
      </Grid>
    );
  }
}

MenuDataTable.propTypes = Menu.propTypes;
MenuDataTable.defaultProps = Menu.defaultProps;

export default withStyles(s)(MenuDataTable);
