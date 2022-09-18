const gis = [
    {
       name:'A0',
       minWeightLbs:95,
       maxWeightLbs:109,
       minWeightKg: 43,
       maxWeightKg: 49.5,
       minHeight: 58,
       maxHeight:61,
       maxHeightCm:147,
       minHeightCm:155
   },
    {
       name:'A1',
       minWeightLbs:110,
       maxWeightLbs:139, 
       minWeightKg: 50,
       maxWeightKg:63,
       minHeight: 62,
       maxHeight: 65,
       minHeightCm:157,
       maxHeightCm:165
   },
    {
       name:'A2',
       minWeightLbs:140,
       maxWeightLbs: 169,
       minWeightKg: 64,
       maxWeightKg: 77,
       minHeight: 65,
       maxHeight:69,
       minHeightCm:165,
       maxHeightCm:175
   },
   {
       name:'A3',
       minWeightLbs:170,
       maxWeightLbs: 199,
       minWeightKg: 77,
       maxWeightKg: 90.5,
       minHeight: 69,
       maxHeight:73,
       minHeightCm:175,
       maxHeightCm:185
    },
    {
       name:'A4',
       minWeightLbs:200,
       maxWeightLbs: 250,
       minWeightKg: 91,
       maxWeightKg: 114,
       minHeight: 72,
       maxHeight:76,
       minHeightCm:183,
       maxHeightCm:193
    },
    {
       name:'A5',
       minWeightLbs:225,
       maxWeightLbs:275,
       minWeightKg: 102,
       maxWeightKg: 125,
       minHeight: 72,
       maxHeight:78,
       minHeightCm:183,
       maxHeightCm:198

    }
];
/* 
const firstSplit =  (str, char ) => { str.indexOf(0, char)}
const FeetInInches = parseInt(firstSplit(userWeight, `'`)) * 12;
const seconsSplit = (str, charStart, charEnd) => {str.indexOf(charStart + 1,charEnd)};
const inches = parseInt(seconsSplit(userWeight, firstSplit, `"`)); */

const measureInInches = ()=>{
    const stop = parseInt(m.slice( 0, m.indexOf ( "'" )));

    const firstSegment = m.slice( 0,stop );
    const convert = parseInt( firstSegment );
    const feetInInches = convert * 12;
    const end = m.indexOf( '"' );
    const secondSegment = m.slice( stop +1,end ); 
    const inches = parseInt( secondSegment );

    return totalInches = feetInInches + inches;
};

// do a lookup by Weight

const castToInchMeasurement = ( heightInput )=>{
    if (! isNumber( trimmedMeasure )){
        return measureInInches( trimmedMeasure );
    };
    return trimmedMeasure;
};
    
  // @todo Look up how to get the value of a radio button

    const colour = document.getElementsByName("gi-colour");
    const ischecked = (colour)=>{
        if (colour.checked = true){
            return colourCheckBox.value;
        }
    };    

    console.log(ischecked(colour)); 
        
// Do this when the whole page is loaded
document.addEventListener( 'DOMContentLoaded', () => {
    
    // USER INTERACTION HAPPENS HERE
    const form = document.getElementById('gi-search');//Get submit form.
    const weightInput = form.getElementById('weight'); //Get weight field.
    const heightInput = form.getElementById('height');  //Get height field.
   
    // Form submit handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        

        // Before

        const findByInches = (inches) => ( item ) => inches >= item.minHeight && inches <= item.maxHeight;
        const findByLbs = (userMeasure) => (gi) => (userMeasure >= gi.minWeightLbs &&
             userMeasure <= gi.maxWeightLbs);
        
        const matchUserWeight = findByLbs( trim( weightInput.value ) );
        const matchUserHeight = findByHeight( castToInchMeasurement( heightInput.value ) );
        /* const sizedGis = gis.filter( matchUserWeight ).filter( matchUserHeight ); */


        // After

        /**
         * @param val  The value used for matching
         * @param fI   The floor index
         * @param cI   The ceiling index
         */
      /*   const valueInIndexedRange = (val, fI, cI) => { 
            return (ary) => { 
                return val >= ary[fI] && val <= ary[cI]; 
            }
        }; */

        const userWeight = weightInput.value;
        const useHeight = castToInchMeasurement( heightInput.value );
        
        const filterByUserHeight = valueInIndexedRange( userWeight, 'minHeight', 'maxHeight');
        const filterByUserWeight = valueInIndexedRange( userHeight, 'minWeightLbs', 'maxWeightLbs' );
        
        const sizedGis = gis.filter( filterByUserHeight ).filter( filterByUserWeight );


    });

});