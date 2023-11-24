import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { columns } from "./newsGridColumns";
export default function NewsGrid({ news }) {
  const router = useNavigate();
  const [article, setArticle] = useState({});

  let rows = [];

  if (news) {
    rows = news.map((article) => ({
      id: uuidv4(),
      ...article,
    }));
  }

  useEffect(() => {
    if (article.id) {
      router(`/news/${article.id}`, { state: { article } });
    }
  }, [article, router]);

  const handleRowClick = (details) => {
    setArticle(details.row);
  };

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5, 10, 20, 50, 100]}
      checkboxSelection={false}
      disableRowSelectionOnClick
      disableSelectionOnClick={true}
      rowHeight={150}
      onRowClick={(details) => handleRowClick(details)}
    />
  );
}
