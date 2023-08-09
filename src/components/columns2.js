export const COLUMNS=[
    {
        Header:'Id',
        Footer:'Id',
        accessor:'id'
    },
    {
        Header:'Company Name',
        Footer:'Company Name',
        accessor:'company_name'
    },
    {
        Header:'Company Logo',
        Footer:'Company Logo',
        accessor:'company_logo'
    },
    {
        Header:'App Name',
        Footer:'App Name',
        accessor:'app_name'
    },
    {
        Header:'Salary',
        Footer:'Salary',
        accessor:'salary'
    },
    {
        Header:'Company Description',
        Footer:'Company Description',
        accessor:'company_description'
    }
]

export const GROUPED_COLUMNS=[
    
        {
            Header:'Id',
            Footer:'Id',
            accessor:'id'
        },  
    {
        Header:'Company Info',
        footer:'Company Info',
        columns:[
            {
                Header:'Company Name',
                Footer:'Company Name',
                accessor:'company_name'
            },
            {
                Header:'Company Logo',
                Footer:'Company Logo',
                accessor:'company_logo'
            },
            {
                Header:'App Name',
                Footer:'App Name',
                accessor:'app_name'
            }


        ]
    },
    {
        Header:'Salary and Description',
        Footer:'Salary and Description',
        columns:[
    {
        Header:'Salary',
        Footer:'Salary',
        accessor:'salary'
    },
    {
        Header:'Company Description',
        Footer:'Company Description',
        accessor:'company_description'
    }

]
}
]