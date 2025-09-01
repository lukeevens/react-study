import { RadarChartOutlined, UserOutlined } from "@ant-design/icons";
import { Space } from "antd";
import React from "react";
import { Prompts, PromptsProps, Welcome } from "@ant-design/x";
import { FireOutlined, CoffeeOutlined, SmileOutlined } from '@ant-design/icons';
import './index.css';
const items: PromptsProps['items'] = [
    {
        key: '6',
        icon: <CoffeeOutlined style={{ color: '#964B00' }} />,
        description: 'How to rest effectively after long hours of work?',
        disabled: false,
    },
    {
        key: '7',
        icon: <SmileOutlined style={{ color: '#FAAD14' }} />,
        description: 'What are the secrets to maintaining a positive mindset?',
        disabled: false,
    },
    {
        key: '8',
        icon: <FireOutlined style={{ color: '#FF4D4F' }} />,
        description: 'How to stay calm under immense pressure?',
        disabled: false,
    },
];

export const Copliot = () => {
    return (
        <div className="copliotContainer">
            <div
                className="copliotTopContainer">
                <Space
                    size={5}>
                    <RadarChartOutlined />
                    <span>Copliot</span>
                </Space>
                <UserOutlined />
            </div>
            <div
                className="copliotContentWrapper">
                <Welcome
                    title="Hello, I'm Ant Design X"
                    description="Base on Ant Design, AGI product interface solution, create a better intelligent vision~" />
                <Prompts title="🤔 You might also want to ask:" items={items} vertical />
            </div>
        </div>
    )
}