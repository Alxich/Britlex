import logo from '../assets/images/logo.svg';
import banner from '../assets/images/banner.svg';
import light from '../assets/images/light.svg';
import skills1 from '../assets/images/skills-1.svg';
import skills2 from '../assets/images/skills-2.svg';
import skills3 from '../assets/images/skills-3.svg';
import skills4 from '../assets/images/skills-4.svg';
import AboutUs from '../assets/images/about-us.svg';
import pricing1 from '../assets/images/pricing-1.svg';
import pricing2 from '../assets/images/pricing-2.svg';
import pricing3 from '../assets/images/pricing-3.svg';
import contact from '../assets/images/contact.svg';
import contactReducer from './contactReducer.js';

let store = {
    _state: {
        header: {
            logo: {
                url: logo,
                alt: 'logo-image'
            },
            navLink: [
                {title: 'Home', link: 'home', target: '_self', id: 10},
                {title: 'Skills', link: 'skills', target: '_self', id: 20},
                {title: 'About Us', link: 'about', target: '_self', id: 30},
                {title: 'Pricing', link: 'pricing', target: '_self', id: 40},
                {title: 'Contacts', link: 'contact', target: '_self', id: 50}
            ],
            button: 'Let’s Talk'
        },
        footer: {
            logo: {
                url: logo,
                alt: 'footer-logo-image'
            },
            policies: [
                {title: 'Terms and Conditions', link: '#', target:'_self', id: 11},
                {title: 'Privacy Policy', link: '#', target:'_self', id: 12},
                {title: 'Cookie Policy', link: '#', target:'_self', id: 13}
            ]
        },
        homepage: {
            banner: {
                title: ['Learn', <br/>, 'Any Foreign Language'],
                text: 'With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.',
                button: 'Get started',
                image: {
                    url: banner,
                    alt: 'banner-image'
                },       
                lightImage: {
                    url: light,
                    alt: 'banner-light-image'
                }            
            },
            skills: {
                title: 'Skills',
                gridItems: [
                    { 
                        image: { src: skills1, alt: 'item-image-1' },
                        title: 'Speaking',
                        text: ['Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free for a limited time only', <br/>, <br/>, 'Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners.'], 
                        button: 'Learn more', 
                        id: 21 
                    },
                    {
                        image: { src: skills2, alt: 'item-image-2' },
                        title: 'Writing', 
                        text: 'One of the most important and extensive areas of natural science, the science that studies substances, also their composition',
                        button: 'Learn more', 
                        id: 22 
                    },
                    {
                        image: { src: skills3, alt: 'item-image-3' },
                        title: 'Reading', 
                        text: 'perception and response actions of the user resulting from the use and/or upcoming use of the product, system or service', 
                        button: 'Learn more', 
                        id: 23 
                    },
                    {
                        image: { src: skills4, alt: 'item-image-4' },
                        title: 'Listening', 
                        text: 'Here you can find activities to practise your listening skills. Listening will help you to improve your understanding',
                        button: 'Learn more', 
                        id: 24 
                    }
                ]
            },
            about: {
                title: 'About Us',
                text: "The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.",
                aboutItem: [
                    {
                        number: 800,
                        title: 'Pupils',
                        id: 31
                    },
                    {
                        number: 18,
                        title: 'Teachers',
                        id: 32
                    },
                    {
                        number: 6,
                        title: 'Foreign languages',
                        id: 33
                    }
                ],
                image: {
                    src: AboutUs,
                    alt: 'about-image'
                },
            },
            pricing: {
                title: 'Pricing',
                pricingItems: [
                    {
                        title: 'Self-study online course',
                        text: 'Start learning English online in live classes with qualified EC teachers and students from all over the world.',
                        price: '£5.99',
                        whileTime: 'per month',
                        image: {
                            src: pricing1,
                            alt: 'price-image-1'
                        },
                        id: 41
                    },
                    {
                        title: 'Live online classes',
                        text: 'Interactive group classes with expert teachers. Free 7-day trial',
                        price: '£13.99',
                        whileTime: 'per month',
                        image: {
                            src: pricing2,
                            alt: 'price-image-2'
                        },
                        id: 42
                    },
                    {
                        title: 'Personal Tuition',
                        text: 'Online one-to-one English tutoring – enjoy our first session for only $1',
                        price: '£20.99',
                        whileTime: 'per month',
                        image: {
                            src: pricing3,
                            alt: 'price-image-3'
                        },
                        id: 43
                    }
                ]
            },
            contact: {
                image: {
                    src: contact,
                    alt: 'price-image-3'
                },
                title: 'Contact Us',
                text: 'Discover your current English level by taking our free online English test.Sign up to our newsletter for learning tips and free resources',
                placeholder: 'Enter Your E-mail',
                button: 'Subscribe',
                mails_log: []
            }
        },
    },

    getState() {
        return this._state;
    },

    _callSubscrider() {
        console.log('Updated database !');
    },

    subscribe(observer) {
        this._callSubscrider(observer);
    },

    dispatch(action) {
        contactReducer(this._state.homepage.contact, action);

        this._callSubscrider(this._state);
    }
}

window.store = store;

export default store;