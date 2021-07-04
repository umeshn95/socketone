import React,{Component} from 'react'
import {ContactSec,Contactgrid,ContactHeader,ContactForm,ContactTextHeader,ContactPara,ContactDiscuss,ContactSpecialist,ContactName,ContactFullName,ContactCompanyName,ContactEmail,ContactAsk,ContactHelp,Input,Button} from'./Contact.elements';
import {Container} from '../../globalStyles';
class Contact extends Component{
    
    render(){
        return (
            <>
            <ContactSec>
                <Container>
                <Contactgrid>
                    <ContactHeader>
                        <ContactTextHeader>
                        Let’s Get Your Project Started.
                        </ContactTextHeader>
                        <ContactPara>
                        It’s time to redefine what awesome really looks like.
                        </ContactPara>
                    </ContactHeader>
                    <ContactForm>
                        <ContactDiscuss>
                        Discuss your latest project with a SocketFlow specialist.
                        </ContactDiscuss>
                        <ContactSpecialist>
                        We’re looking forward to working together. Share your thoughts below and one of our SocketFlow specialists will be in touch shortly.
                        </ContactSpecialist>
                        <ContactName>
                            <ContactFullName>
                            <Input big={false} Hbig={false} type='text'  placeholder='FullName'></Input>
                            </ContactFullName>
                            <ContactCompanyName>
                            <Input big={false} Hbig={false} type='text' placeholder='CompanyName'></Input>
    
                            </ContactCompanyName>
                        </ContactName>
                        <ContactEmail>
                        <Input big={true} Hbig={false}type='email'  placeholder='Email'></Input>
    
                        </ContactEmail>
                        <ContactAsk>
                        <Input big={true} Hbig={false}type='text'  placeholder='How did you hear about our company?'></Input>
                        
                        </ContactAsk>
                        <ContactHelp>
                        <Input big={true} Hbig={true}type='text'  placeholder='How can We Help?'></Input>
                        
                        </ContactHelp>
                        <Button>
                        Submit Request
                      </Button>
                    </ContactForm>
                </Contactgrid>
    
                </Container>
            </ContactSec>
            </>
        )
    }
}
   


export default Contact
