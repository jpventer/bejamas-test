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
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    transition: all 0.25s linear;
  }

  main{
      padding-top:6rem;
      padding-bottom:17rem;      
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
 

  .title{
      color: ${({ theme }) => theme.titlesColor};

      &.header1{
        font-size: 4.6rem;
        line-height: 5.7rem;
        font-weight: 600;
        margin-bottom: 2rem;
      }

      &.header2{
        font-size: 2.2rem;
        line-height: 2.7rem;
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

      @media(max-width: 480px) {
            
            color: #333333;

            &.header1{
                font-size:3.2rem;
                line-height: 3.9rem;
            }

            &.header2{
                font-size: 1.8rem;
            }
        }
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
