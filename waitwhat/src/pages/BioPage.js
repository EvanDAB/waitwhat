import React from 'react';
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import ImageGallery from '../components/ImageGallery';

class BioPage extends React.Component {
    render(){
        return (
            <div>
                <p>
                    Troy Skinner and Damon Dokhani, known as waitwhat, are a DJ/producer duo based in the Bay Area. Troy and Damon first met during their time at UC Berkeley as members of the same fraternity. During this time, Troy began producing as a hobby fueled by nothing more than a passion to make music. Damon, after connecting with on-campus music groups, made strides towards becoming a solo performing act under the moniker NomaD. After seeing the potential in one another, Damon joined Troy’s solo project, waitwhat, in June 2017. waitwhat blends together their many influences into a signature sound. Growing up in Santa Barbara and the South Bay Area respectively, Troy and Damon’s unique styles shine through on the music that they produce and perform. Bringing in vast arrays of Hip Hop, Alt-Pop, Trap, and Bass Music, waitwhat’s live sets are sure to incorporate a myriad of musical genres. Since coming together in the summer of 2017, waitwhat has accumulated millions of streams across all platforms, led by their first original “Alive feat. Rielle” – released through Future Bass XO of the Chill Trap Network – and their remix of Tep No's "Sippin' On Feelings" with SEPPIE – released on Ultra Records. During this same time, waitwhat has shared stages with many notable EDM acts including Audien, Ekali, Zeds Dead, Joyryde, Jauz, Vincent, Luca Lush, Nitti Gritti and more.
                </p>
                <ImageGallery/>
            </div>
        )
    }
}

export default BioPage;
