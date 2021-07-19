import { Tablr } from "../Tablr";

export default {
    title: 'A customized React Table Component',
    component: Tablr,
    argTypes: {
        row: { control: '' },
        header: { control: ''}
    }
    
};

const Template = args => <Tablr {...args}/>

export const Default = Template.bind({});
Default.args = {
    rows: [
        ['This', 'is', 'just', 'a', 'test'],
        ['This', 'is', 'also', 'a', 'test'],
        ['Just', 'a', 'little', 'more', 'coding'],
        ['Row', 'number', 'four', 'right', 'here'],
    ],
    headers: ['Col 1', 'Col 2', 'Col 3', 'Col4', 'Col 5'],
};