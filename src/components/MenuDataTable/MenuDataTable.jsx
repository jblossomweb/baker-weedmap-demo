import React from 'react';
import { withStyles } from 'material-ui/styles';
import {
  Grid,
  TableView,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

import Menu from '../../models/Menu.model';
import s from './MenuDataTable.css';

const MenuDataTable = props => (
  <div className={s.root}>
    <Grid
      rows={props.menu}
      columns={[
        { name: 'name', title: 'Name' },
        { name: 'description', title: 'Description' },
      ]}
    >
      <TableView />
      <TableHeaderRow />
    </Grid>
  </div>
);

MenuDataTable.propTypes = Menu.propTypes;
MenuDataTable.defaultProps = Menu.defaultProps;

export default withStyles(s)(MenuDataTable);
