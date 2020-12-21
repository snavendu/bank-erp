import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import Axios from "axios";
import moment from "moment";
import { Table, Tag, Space } from "antd";

const currentLink = "https://zauba-backened.herokuapp.com";

const columns = [
    {
        title: "Transaction Date",
        dataIndex: "Transaction Date",
        key: "t_date",
    },
    {
        title: "Value Date",
        dataIndex: "Value Date",
        key: "v_date",
    },
    {
        title: "Details",
        dataIndex: "Details",
        key: "details",
    },
    {
        title: "Debit",
        key: "debit",
        dataIndex: "Debit",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: "Credit",
        key: "credit",
        dataIndex: "Credit",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: "Balance",
        key: "balance",
        dataIndex: "Balance",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.age - b.age,
    },
];

// const data = [
//     {
//         key: "1",
//         name: "John Brown",
//         age: 32,
//         address: "New York No. 1 Lake Park",
//         tags: ["nice", "developer"],
//     },
//     {const data = [
//     {
//         key: "1",
//         name: "John Brown",
//         age: 32,
//         address: "New York No. 1 Lake Park",
//         tags: ["nice", "developer"],
//     },
//     {
//         key: "2",
//         name: "Jim Green",
//         age: 42,
//         address: "London No. 1 Lake Park",
//         tags: ["loser"],
//     },
//     {
//         key: "3",
//         name: "Joe Black",
//         age: 32,
//         address: "Sidney No. 1 Lake Park",
//         tags: ["cool", "teacher"],
//     },
// ];
//         tags: ["loser"],
//     },
//     {
//         key: "3",
//         name: "Joe Black",
//         age: 32,
//         address: "Sidney No. 1 Lake Park",
//         tags: ["cool", "teacher"],
//     },
// ];

export default function Panel() {
    const [data, setdata] = useState(null);
    const [select, setselect] = useState([]);
    const onSelectChange = (selectedRowKeys) => {
        console.log("selectedRowKeys changed: ", selectedRowKeys);
        setselect(selectedRowKeys);
    };
    const rowSelection = {
        select,
        onChange: onSelectChange,
    };
    const props = {
        name: "file",
        action: `${currentLink}/upload-statement`,
        headers: {},
        onChange(info) {
            if (info.file.status !== "uploading") {
            }
            if (info.file.status === "done") {
                message.success(`uploaded successfully`);
                const d = info.file.response.data.map((d, i) => ({
                    ...d,
                    key: i.toString(),
                }));
                setdata(d);
            } else if (info.file.status === "error") {
                message.error(`${info.file.response}`);
            }
        },
    };
    console.log(data);
    return (
        <Container>
            <div
                style={{
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div
                    style={{
                        marginBottom: 30,
                        marginTop: 20,
                        alignSelf: "flex-end",
                    }}
                >
                    <Upload {...props} accept=".csv">
                        <Button icon={<UploadOutlined />}>
                            Upload only csv
                        </Button>
                    </Upload>
                </div>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    pagination={{ pageSize: 5 }}
                    dataSource={data}
                />
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10vh;
`;
