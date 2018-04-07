import React, { Component } from 'react';
import { Table, Button } from 'antd';


class AllSignInComponent extends Component {
  state = {
    users: [],
    filteredInfo: null,
    sortedInfo: null,
  }
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  }
  setClassSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'class',
      },
    });
  }
  componentDidMount() {
    fetch('/signin')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
    }, {
      title: '姓名',
      dataIndex: 'username',
      key: 'username',
      sorter: (a, b) => a.username.length - b.username.length,
      sortOrder: sortedInfo.columnKey === 'username' && sortedInfo.order,
    }, {
      title: '班级',
      dataIndex: 'class',
      key: 'class',
      sorter: (a, b) => a.class.length - b.class.length,
      sortOrder: sortedInfo.columnKey === 'class' && sortedInfo.order,
    }, {
      title: '地址',
      dataIndex: 'location',
      key: 'location',
      filters: [
        { text: '静安区', value: '静安区' },
        { text: '虹口区', value: '虹口区' },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.location.includes(value),
      sorter: (a, b) => a.location.length - b.location.length,
      sortOrder: sortedInfo.columnKey === 'location' && sortedInfo.order,
    },
    {
      title: '时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: (a, b) => a.createdAt - b.createdAt,
      sortOrder: sortedInfo.columnKey === 'createdAt' && sortedInfo.order,
    }];

    return (
      <div className="App">
        <h1>签到表</h1>
        <div className="table-operations">
          <Button onClick={this.setClassSort}>班级排序</Button>
          <Button onClick={this.clearFilters}>清除过滤器</Button>
          <Button onClick={this.clearAll}>清除所有</Button>
        </div>
        <Table columns={columns} dataSource={this.state.users} onChange={this.handleChange} />
      </div>
    );
  }
}

export default AllSignInComponent;
