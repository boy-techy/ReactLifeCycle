/**
 * Created by yatindra on 21/3/17.
 */

import React from 'react';

const UserDisplay=({match})=>(
    <div>
        {match.params.id}
    </div>
)


export default UserDisplay;