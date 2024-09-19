import React, { useState } from 'react'
 const Table = () => {

    const [tableData, setTableData] = useState(
        [
        
            { date: "2022-09-01", views: 100, article: "Article 1" },
        
            { date: "2023-09-01", views: 100, article: "Article 1" },
        
            { date: "2023-09-02", views: 150, article: "Article 2" },
        
            { date: "2023-09-02", views: 120, article: "Article 3" },
        
            { date: "2020-09-03", views: 200, article: "Article 4" }
        
        ]);

    const sortData = (key) =>{
        const sortedData = [...tableData].sort((a,b)=>{
            if(a[key] < b[key]) return 1 ;
            if(a[key] > b[key]) return -1 ;
                return 0;
            
        });
        setTableData(sortedData);
    };



  return (
    <div>
        <h1>Date and Views Table</h1>
        <button onClick={() =>sortData('date')}>Sort by Date</button>
        <button onClick={() =>sortData('views')}>Sort by Views</button>

        <table className='app'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item,key)=> (
                    <tr key ={key}>
                        <td>{item.date}</td>
                        <td>{item.views}</td>
                        <td>{item.article}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  );
}

export default Table;