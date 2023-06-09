import React, { useEffect } from 'react'
import '../CSS Files/Colors.css';
import FeedCard from './FeedCard';
import { useState } from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';
import { getCookie } from '../Authorization/Cookie_handle';

export default function FeedPage() {
    // const data=[
    //     {name:"আবদুল্লাহ", time:"Today", story:"A Prophet once passed by an ant hill and saw ants working tirelessly to store food for the winter. He was so impressed that he said, :Go to the ant, you sluggard, and consider her ways and be wise (Quran 6: 118). The lesson here is that we should learn from the hardworking ants and not be lazy."},
    //     {name:"Rahim", time:"Today", story:"The Prophet Muhammad (peace be upon him) used to smile often, and one day a man asked him why he smiled so much. The Prophet replied, \"I smile because it is a charity and a way to bring joy to others.\" This story teaches us the importance of being kind and bringing joy to others."},
    //     {name:"ফাহিম মাহমুদ", time:"Today", story:"On the Day of Judgment, our good deeds and bad deeds will be weighed on a scale. One of the companions of the Prophet asked, \"O Messenger of Allah, what if our good deeds are outweighed by our bad deeds?\" The Prophet replied, \"Then Allah will forgive you out of His mercy.\" This story teaches us about the importance of doing good deeds and seeking forgiveness."},
    //     {name:"সাকিব আল হাসান", time:"Tomorrow", story:"One day, a dog was wandering around in the desert, searching for food. It was so hungry that it started to chew on a dry bone. As it chewed, it discovered that there was still some meat left on the bone. The dog had been patient and had been rewarded for its patience. This story teaches us about the importance of patience and perseverance."},
    //     {name:"Niaz Mahmud", time:"Tomorrow", story:"When the Prophet Muhammad (peace be upon him) was hiding in a cave from his enemies, a spider spun a web over the entrance to the cave. When the enemies came to the cave, they saw the spider web and assumed that nobody could have entered the cave recently. This story teaches us about the importance of using whatever resources we have to protect ourselves and our loved ones."}
    // ]
    const [info,setInfo] = useState([]);
    const [err, setErr] = useState();
  

    useEffect(() => {
      async function handleInfo(){
          try{
            const result =  await axios.post("http://localhost:3002/api/feed");
            setInfo(result.data);
            console.log(result.data);
            console.log(info);
          }catch(err){
            setErr("Not get data ")
          }
      };
      handleInfo();
    }, []); 

    //for sugession
    const getSuggestions = value => {
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
    
      return inputLength === 0 ? [] : info.filter(option =>
        typeof option.Name === 'string' && option.Name.toLowerCase().slice(0, inputLength) === inputValue
      );
    };


    const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: 'Type a fruit name',
    value,
    onChange,
  };
  
  return (
    

    <div className='shade1 p-3 full_page_height' style={{ display: "inline-block" }}>
      <div>
      <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={suggestion => suggestion}
      renderSuggestion={suggestion => <div>{suggestion.Name}</div>}
      inputProps={inputProps}
    />
    </div>

        {info.map((feed)=><FeedCard key ={feed.FeedID} name={feed.Name} time={feed.Date} story={feed.post} FeedID={feed.FeedID} LikeCount={feed.LikeCount}/>)}
    </div>


    
  )
}
