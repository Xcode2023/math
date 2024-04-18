<template>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
    
      <el-table-column prop="address" label="Address" />
    </el-table>
  </template>
  
  <script lang="ts" setup>
  interface User {

    address: string
  }
  
  const tableRowClassName = ({
    row,
    rowIndex,
  }: {
    row: User
    rowIndex: number
  }) => {
    if (rowIndex === 1) {
      return 'warning-row'
    } else if (rowIndex === 3) {
      return 'success-row'
    }
    return ''
  }
  
  const tableData: User[] = [
    {
     
    
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
     
    
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
     
    
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
     
    
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
     
    
      address: 'No. 189, Grove St, Los Angeles',
    },
   
  ]
  </script>
  
  <style>
  .el-table .warning-row {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
  }
  .el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
  }
  </style>
  