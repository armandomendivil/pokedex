import React from 'react';
import { Card } from 'material-ui/Card';
import DataTables from 'material-ui-datatables';
import LinearProgress from 'material-ui/LinearProgress';
import { api } from '../services/api';

export const TABLE_COLUMNS = [
  {
    key: 'id',
    label: 'ID',
  }, {
    key: 'url',
    label: 'URL',
  }, {
    key: 'name',
    label: 'Name',
  },
];

export default class PokemonList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      page: 1,
      search: '',
      rowId: undefined,
      col: {
        isActive: false,
        table: 12,
        item: 0,
      },
      list: [],
      isProcessing: false,
    };

    this.handleCellDoubleClick = this.handleCellDoubleClick.bind(this);
  }

  async componentDidMount() {
    this.setState({
      isProcessing: true,
    });
    const response = await api('pokemon?limit=10');
    this.setState({
      list: response.results.map(({ url, name }, id) => ({
        id: (id  + 1),
        url,
        name,
      })),
      isProcessing: false,
    });
  }

  handleCellDoubleClick(rowIndex, columnIndex, row) {
    const { history } = this.props;
    history.push(`/pokemon/${row.id}`);
  }

  render() {
    const { list, isProcessing } = this.state;

    return (
      <div className="row">
        <Card style={{ margin: 12 }}>
          {
            isProcessing ?
            <LinearProgress mode="indeterminate" /> :
            <DataTables
              title={'Pokemon List'}
              height={'auto'}
              selectable={false}
              showRowHover
              columns={TABLE_COLUMNS}
              data={list}
              showCheckboxes={false}
              showHeaderToolbar
              page={this.state.page}
              onCellDoubleClick={this.handleCellDoubleClick}
              count={list.length}
            />
          }
        </Card>
      </div>
    );
  }
}
