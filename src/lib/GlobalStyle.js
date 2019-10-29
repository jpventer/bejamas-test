import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
    blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img,
    ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center,
    dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody,
    tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure,
    figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }

  html{
    font-size: 62.5%;
    text-size-adjust: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size:1.8rem;
    line-height:3.3rem;
    color: #182333;
  }

  .container{
        margin:0 auto;

        &.boxed{
            max-width:1440px;
            padding-left:2rem;
            padding-right:2rem; 
        }

        &.full{
            width:100%;
        }
  }

  main{

      padding-top:6rem;
         

    .container{ 
        /* hero 1 type container */
        &.hero1{
            display: grid;
            grid-template-columns: 55% 45%;
            height: 100vh;
            align-items: center;

            @media screen and (max-width:1072px) {
                grid-template-columns: 1fr;
            }

            .left-content{
                max-width: 545px;
                justify-self: center;
            }

            .right-content{
                max-width:383px;
            }

            @media(max-width: 480px) {
                grid-template-columns: auto;
                grid-template-rows: auto;
                justify-items: center;

                .left-content{
                    width: 323px;
                    align-self: flex-end;
                    margin-bottom:1rem;
                }

                .right-content{
                    width:262px;
                    align-self: flex-start;
                    margin-top:6.7rem;
                }
            }

           
        }

      }
      
     
  }

  .title{
      color: #394E5D;
      
      &.hero1{
        font-size:4.6rem;
        line-height: 5.7rem;
        font-weight: 600;
        margin-bottom: 2rem;
      }

      &.hero1-subtitle{
        font-size: 2.2rem;
        line-height:2.7rem;
      }

      @media(max-width: 480px) {
       
        color: #333333;

        &.hero1{
            font-size:3.2rem;
            line-height: 3.9rem;
            margin-bottom: 2.2rem;
        }

        &.hero1-subtitle{
            font-size: 1.8rem;
            line-height:2.7rem;
        }
      }

      &.header3{
          font-size:3.2rem;
          line-height:3.9rem;
          font-weight: 700;
      }

      &.header4{
          font-size:2rem;
          line-height:2.4rem;
          font-weight:bold;
          margin-bottom:1.8rem;
      }
  }

  .normal-copy{

  }

  .blue-pill-button{
      padding: 1rem 3rem;
      border-radius: 3.2rem;
      border: 1px solid #3D86BF;

      color: #4285BC;
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 2.7rem;
      text-decoration:none;
      width: max-content;

      &:hover{
          background-color: #3D86BF;
          color:white;
      }
  }
`;

export default GlobalStyle;
