export const schemaTypes = [
    {
      title: 'Coins',
      name: 'coins' ,
      type: 'document',
      fields:[
        {
        title:'Name',
        name:'name',
        type:'string'
        } ,
        {
            title:'Symbol',
            name:'symbol',
            type:'string'
            } ,
            {
                title:'Contract Address',
                name:'contractAddress',
                type:'string'
                } ,
                {
                    title:'USD Price',
                    name:'usdPrice',
                    type:'string'
                    } ,

                    {
                        title:'Logo',
                        name:'logo',
                        type:'image'
                        } ,
                
                
      ]
    }
]
