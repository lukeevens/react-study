import React from "react";
import { Card, List } from "antd";
import "./index.css";

const imageUrl = "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"

const data = [
    {
        id: 1,
        imgUrl: imageUrl,
        title: "React 入门教程",
        type: "前端开发"
    },
    {
        id: 2,
        imgUrl: imageUrl,
        title: "Node.js 实战指南",
        type: "后端开发"
    },
    {
        id: 3,
        imgUrl: imageUrl,
        title: "Python 数据分析",
        type: "数据科学"
    },
    {
        id: 4,
        imgUrl: imageUrl,
        title: "Flutter 跨平台开发",
        type: "移动开发"
    },
    {
        id: 5,
        imgUrl: imageUrl,
        title: "Vue.js 高级技巧",
        type: "前端开发"
    },
    {
        id: 6,
        imgUrl: imageUrl,
        title: "Docker 容器化部署",
        type: "DevOps"
    },
    {
        id: 7,
        imgUrl: imageUrl,
        title: "机器学习基础",
        type: "人工智能"
    },
    {
        id: 8,
        imgUrl: imageUrl,
        title: "TypeScript 全面指南",
        type: "前端开发"
    }
];

export const ItemList = () => {
    return (
        <div
            className="list-card-container">
            <div>
                <h2>热门课程</h2>
            </div>
            <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4 }}
                dataSource={data}
                className="list-card"
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            hoverable
                            cover={<img alt={item.title} src={item.imgUrl} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
                        >
                            <Card.Meta
                                title={item.title}
                                description={item.type}
                            />
                        </Card>
                    </List.Item >
                )}
            />
        </div>
    );
};