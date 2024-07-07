# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
\









.logo img{
                    height: 30px;
              }
              .logo{
                  width: 7px;
              }
              
              li{
                  text-align: center;
                  list-style: none;
              }
              
              .btn {
                  width: 40px;
                  font-size: 6px;
                  background: transparent;
                  border: none;
                  margin: 0 2px;
                  color: #ffedd3;
                  text-transform: uppercase;
                  position: relative;
                  transition: 0.5s ease;
                  cursor: pointer;
          
                  
              }
              
               
                nav{
                  display: flex;
                  height: 50px;
                  width: 450px;
                  font-size: 10px;
                  justify-content: start;
              }
              .btn::before {
                  content: "";
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  height: 1px;
                  background-color: #ffc506;
                  transition: 0.5s ease;
                }
          
                .animated-button {
                  margin-right: 40px;
                  position: relative; 
                  display: flex;
                  align-items: center;
                  text-align: center;
                  gap: 2px;
                  padding: 5px 0px 5px 20px;
                  border: 4px solid;
                  border-color: transparent;
                  font-size: 8px;
                  background-color: inherit;
                  border-radius: 50px;
                  font-weight: 600;
                  color: rgb(234, 255, 47);
                  box-shadow: 0 0 0 2px rgb(175, 119, 9);
                  cursor: pointer;
                  overflow: hidden;
                  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
              }
              
                .animated-button svg {
                  position: absolute;
                  width: 10px;
                  fill: rgb(248, 255, 47);
                  z-index: 9;
                  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                
                .animated-button .arr-1 {
                  right: 12px;
                }
                
                .animated-button .arr-2 {
                  left: -45%;
                }
                
                .animated-button .circle {
                    position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  width: 38px;
                  height: 20px;
                  background-color: rgb(255, 227, 47);
                  border-radius: 50%;
                  opacity: 0;
                  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
              }
              
              .animated-button .text {
                  position: relative;
                  z-index: 1;
                  transform: translateX(-12px);
                  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
              }
                .hero1{
                  
                  margin: 100px 5px;
                  display: table;
          
                }
          
                .hero1 h1{
                  font-size: 20px;
                  color: #ffc506;
                    }
                    .hero1 p{
                      font-size: 15px;
                      
                      width: 360px;
                        }
                        .hero1 img{
                            height: 200px;
                            
                          }
                          
                          
                          .btnsec button{
                              margin: 10px 30px;
                            }
                          
                            .SEC2{
                  color: #f1f1f1;
                          margin: 70px 10px;
                          
                          display: table;
                        }
                        .SEC2 p{
                          font-size: 15px;
                          
                          width: 360px;
                      }
                      .SEC2 h1{
                          font-size: 20px;
                          color: #ffc506;
                          
                      }
                      .SEC2 img{
                          margin-left: 50px;
                          height: 250px;
                      }
                      .SEC2 button{
                          margin-top: 20px;
                          
                      }
                      .butoonflex{
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        }
                      
                        .sec3{
                          display: table;
                          justify-content: center;
                          align-items:center;
                        }
                        
                        .img1{
                          
                        }
                        .card {
                          width: 200px;
                          padding: 1rem;
                          margin: 0 0px;
                          background-color: var(--bg-card);
                          border-radius: 1rem;
                          position: relative;
                          display: inline-block; /* Corrected display value */
                          gap: 0.72rem; /* Removed, as it's not valid for display */
                        
                          /* Define custom properties for colors */
                          --bg-card: #27272a;
                          --primary: #6d28d9;
                          --primary-800: #4c1d95;
                          --primary-shadow: #2e1065;
                          margin: 10px 50px;
                          
                          --light: #d9d9d9;
                          --zinc-800: #18181b;
                          --bg-linear: linear-gradient(0deg, var(--primary) 20%, var(--light) 125%);
                        }
                        
                        .image_container {
                            overflow: hidden;
                          cursor: pointer;
                          position: relative;
                          z-index: 5;
                          width: 200px;
                          height: 150px;
                          height: 10rem;
                          background-color: rgba(238, 176, 4, 0.523);
                          border-radius: 0.5rem;
                        }
                        
                        .image_container .image {
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          transform: translate(-50%, -50%);
                          width: 3rem;
                          fill: var(--light);
                        }
                        
                        .title {
                          overflow: hidden; /* Changed 'clip' to 'hidden' */
                          width: 100%;
                          font-size: 1rem;
                          font-weight: 400;
                          color: var(--light);
                          text-transform: capitalize;
                          white-space: nowrap; /* Corrected 'text-wrap' to 'white-space' */
                          text-overflow: ellipsis;
                      }
                        
                        .size {
                          font-size: 0.75rem;
                          color: var(--light);
                      }
                        
                        .list-size {
                          display: flex;
                          align-items: center;
                          justify-content: flex-end;
                          margin-top: 0.25rem;
                        }
                        
                        .list-size .item-list {
                          list-style: none;
                        }
                        
                        .list-size .item-list-button {
                          cursor: pointer;
                          padding: 0.5rem;
                          background-color: var(--zinc-800);
                          font-size: 0.75rem;
                          color: var(--light);
                          border: 2px solid rgba(248, 248, 16, 0.569);
                          border-radius: 0.25rem;
                          transition: all 0.3s ease-in-out;
                        }
                        
                        .list-size .item-list-button:hover {
                          border-color: var(--light); /* Corrected to change border-color */
                        }
                        
                        .list-size .item-list-button:focus {
                          background-color: rgb(0, 0, 0);
                          border-color: yellow; /* Changed to 'border-color' */
                          box-shadow: inset 0px 1px 4px yellow;
                        }
                        
                        .action {
                          display: flex;
                          align-items: center;
                          gap: 1rem;
                        }
                        
                        .price {
                          font-size: 1.5rem;
                          font-weight: 700;
                          color: var(--light);
                      }
                      
                        .cart-button {
                          cursor: pointer;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          gap: 0.15rem;
                          padding: 0.5rem;
                          width: 70%;
                          background: var(--bg-linear); /* Changed 'background-image' to 'background' */
                          font-size: 0.75rem;
                          font-weight: 500;
                          color: var(--light);
                          white-space: nowrap; /* Corrected 'text-wrap' to 'white-space' */
                          border: 2px solid black;
                          border-radius: 0.5rem;
                          box-shadow: inset 0 0 0.25rem 1px var(--light);
                      }
                      
                        .cart-button .cart-icon {
                          width: 1rem;
                        }
                        
                        .education {
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          flex-direction: column;
                          min-height: auto;
                          color: white;
                      }
                      
                      .education .education-row {
                          display: flex;
                          flex-wrap: wrap;
                          gap: 4rem;
                      }
                      
                      .education-row .education-column {
                          flex: 1 1 30rem;
                      }
                      
                      .education-column .title {
                          position: relative;
                          display: inline-block;
                          font-size: 2.5rem;
                          margin: 0 0 1.5rem 2rem;
                      }
                      
                      .education-column .education-box {
                          position: relative;
                          border-left: .2rem solid yellow;
                      }
                      
                      .education-box .education-content {
                          position: relative;
                          padding-left: 1rem;
                      }
                      
                      .education-box .education-content::before {
                          content: '';
                          position: absolute;
                          top: 0;
                          left: -1.1rem;
                          width: 2rem;
                          height: 2rem;
                          background: yellow;
                          border-radius: 50%;
                      }
                      
                      .education-content .content {
                          position: relative;
                          padding: 1.2rem;
                          width: 150px;
                          height: 200px;
                          border: .2rem solid rgb(0, 255, 191);
                          border-radius: .6rem;
                          margin-bottom: 1rem;
                          overflow: hidden;
                      }
                      
                      .education-content .content::before {
                          content: '';
                          position: absolute;
                          top: 0;
                          left: 0;
                          width: 0;
                          height: 100%;
                    background-color: grey;
                    z-index: -1;
                          transition: .5s;
                      }
                      
                      .education-content .content:hover::before {
                          width: 100%;
                      }
                      
                      .education-content .content .year {
                          font-size: 1.5rem;
                          color: rgb(244, 236, 9);
                          padding-bottom: .5rem;
                      }
                      
                      .education-content .content .year i {
                          padding-right: .5rem;
                        }
                      
                      .education-content .content h3 {
                          font-size: 2rem;
                      }
                      
                      .education-content .content p {
                          font-size: 1.6rem;
                          padding-top: .5rem;
                      }
                      
                      .skills {
                          min-height: auto;
                          padding-bottom: 7rem;
                          /* background: var(--second-bg-color); */
                      }
                      
                      .skills h2 {
                          display: inline-block;
                          left: 50%;
                          transform: translateX(-50%);
                      }
                      
                      .skills .skills-row {
                          display: flex;
                          flex-wrap: wrap;
                          gap: 5rem;
                      }
                      
                      .skills-row .skills-column {
                          flex: 1 1 40rem;
                      }
                      
                      .skills-column .title {
                          position: relative;
                          display: inline-block;
                          font-size: 2.5rem;
                          margin: 0 0 1.5rem;
                      }
                      
                      .skills-column .skills-box {
                          position: relative;
                      }
                      
                      .skills-box .skills-content {
                          position: relative;
                          border: .2rem solid var(--main-color);
                          border-radius: .6rem;
                          padding: .1rem 1.5rem;
                          z-index: 1;
                          overflow: hidden;
                      }
                      
                      .skills-box .skills-content::before {
                          content: '';
                          position: absolute;
                          top: 0;
                          left: 0;
                          width: 0;
                          height: 100%;
                          background: var(--bg-color);
                          z-index: -1;
                          transition: .5s;
                      }
                      
                      .skills-box .skills-content:hover::before {
                          width: 100%;
                      }
                      
                      .skills-content .progress {
                          padding: 1rem 0;
                      }
                      
                      .skills-content .progress h3 {
                          font-size: 1.7rem;
                          display: flex;
                          justify-content: space-between;
                      }
                      
                      .skills-content .progress h3 span {
                          color: var(--text-color);
                      }
                      
                      .skills-content .progress .bar {
                          height: 2.5rem;
                          border-radius: .6rem;
                          border: .2rem solid var(--main-color);
                          padding: .5rem;
                          margin: 1rem 0;
                      }
                      
                      .skills-content .progress .bar span {
                          display: block;
                          height: 100%;
                          border-radius: .3rem;
                          background: var(--main-color);
                      }
                      
                      .skills-column:nth-child(1) .skills-content .progress:nth-child(1) .bar span {
                          width: 90%;
                      }
                      
                      .skills-column:nth-child(1) .skills-content .progress:nth-child(2) .bar span {
                          width: 80%;
                      }
                      
                      .skills-column:nth-child(1) .skills-content .progress:nth-child(3) .bar span {
                          width: 65%;
                      }
                      
                      .skills-column:nth-child(1) .skills-content .progress:nth-child(4) .bar span {
                          width: 75%;
                      }
                      
                      .skills-column:nth-child(2) .skills-content .progress:nth-child(1) .bar span {
                          width: 95%;
                      }
                      
                      .skills-column:nth-child(2) .skills-content .progress:nth-child(2) .bar span {
                          width: 67%;
                      }
                      
                      .skills-column:nth-child(2) .skills-content .progress:nth-child(3) .bar span {
                          width: 85%;
                      }
                      
                      .skills-column:nth-child(2) .skills-content .progress:nth-child(4) .bar span {
                          width: 60%;
                      }
                      
                      .contact {
                          min-height: auto;
                          padding-bottom: 7rem;
                      }
                      
                      .contact h2 {
                          display: inline-block;
                          left: 50%;
                          transform: translateX(-50%);
                      }
                      
                      .contact form {
                          max-width: 70rem;
                          margin: 0 auto;
                          text-align: center;
                      }
                      
                      .contact form .input-box {
                          position: relative;
                          display: flex;
                          justify-content: space-between;
                          flex-wrap: wrap;
                      }
                      
                      .contact form .input-box .input-field {
                          position: relative;
                          width: 49%;
                          margin: .8rem 0;
                      }
                      
                      .contact form .input-box .input-field input,
                      .contact form .textarea-field textarea {
                          width: 100%;
                          height: 100%;
                          padding: 1.5rem;
                          font-size: 1.6rem;
                          color: var(--text-color);
                          background: transparent;
                          border-radius: .6rem;
                          border: .2rem solid var(--main-color);
                      }
                      
                      .contact form .input-box .input-field input::placeholder,
                      .contact form .textarea-field textarea::placeholder {
                          color: var(--text-color);
                      }
                      
                      .contact form .focus {
                          position: absolute;
                          top: 0;
                          left: 0;
                          width: 0;
                          height: 100%;
                          background: var(--second-bg-color);
                          border-radius: .6rem;
                          z-index: -1;
                          transition: .5s;
                      }
                      
                      .contact form .input-box .input-field input:focus~.focus,
                      .contact form .input-box .input-field input:valid~.focus,
                      .contact form .textarea-field textarea:focus~.focus,
                      .contact form .textarea-field textarea:valid~.focus {
                          width: 100%;
                      }
                      
                      .contact form .textarea-field {
                          position: relative;
                          margin: .8rem 0 2.7rem;
                          display: flex;
                      }
                      
                      .contact form .textarea-field textarea {
                          resize: none;
                      }
                      
                      .contact form .btn-box.btns .btn {
                          cursor: pointer;
                      }
                      
                      .footer {
                          display: flex;
                          justify-content: space-between;
                          align-items: center;
                          flex-wrap: wrap;
                          padding: 2rem 9%;
                          background: var(--second-bg-color);
                      }
                      
                      .footer-text,
                      .footer-iconTop {
                          position: relative;
                      }
                      
                      .footer-text p {
                          font-size: 1.6rem;
                      }
                    
                      