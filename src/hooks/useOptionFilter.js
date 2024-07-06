import {useState} from 'react';

const useOptionFilter = (targetArr) => {
    const [option, setOption] = useState({value: "all", label: "all"});

    const statusArr = option => {
        return targetArr.filter(item => item.option === option.value);
    }

    return {
        option,
        setOption,
        optionArr
    }
}

export default useOptionFilter;