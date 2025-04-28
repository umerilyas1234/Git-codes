@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

img {
    image-rendering: -webkit-optimize-contrast;
}
.spz-jupiterone-1012:not(.modal-closed) .modalQuestionswrapper{
    visibility: hidden;
    opacity: 0;
}

.spz_t1065.spz-jupiterone-1012.modal-closed .modal-logo {
    display: flex !important;
}
/* comon css*/
.spz_t1065 .modal-form-wrapper .modal-inner-wrapper{
    border-radius: 0;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    width: 100%;
    margin: 0;
}
.spz_t1065 .modal_form_wrapper .modalQuestionsinner {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    margin-top: auto;
    margin-bottom: auto;
}
.spz_t1065 .modalQuestionswrapper {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: auto;
    padding: 50px;
}
/* comon css*/
@media screen and (max-width: 1024.98px) {
    .spz_t1065 .modalQuestionswrapper {
        padding: 48px;
    }
    .spz_t1065 .modal_form_wrapper .modalQuestionsinner {
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
        align-items: center;
    }
}
/* comon css over*/

/* Form Custom CSS */
.spz_t1065 .modal_form_wrapper .modalQuestions {
    display: flex;
    width: 100%;
    max-width: 580px;
    height: auto;
    -webkit-flex-direction: column;
    flex-direction: column;
    border-radius: 10px;
    background: #FFF;
    justify-content: space-between;
}
.spz_t1065 .modal_form_wrapper {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(33, 33, 33, 0.7);
    background-image: url('//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/1017/bg_desktop.webp');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    z-index: 99999999;
}
.spz_t1065 .modal_form_wrapper .modal-form-container {
    display: none;
}
.spz_t1065 .modal-container {
    width: 100%;
    padding: 48px 40px 0;
    margin: auto 0;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.spz_t1065 .has_loader {
    min-height: 300px;
}
.spz_t1065 .has_loader:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #041E42 transparent #041E42 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    -webkit-animation: lds-dual-ring 1.2s linear infinite;;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
@keyframes lds-dual-ring {
    0% {
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        -ms-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        -webkit-transform: translate(-50%, -50%) rotate(360deg);
        -ms-transform: translate(-50%, -50%) rotate(360deg);
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
.spz_t1065 .form-pagination {
    display: flex;
    justify-content: center;
    margin-bottom: auto;
    padding-bottom: 18px;
}
.spz_t1065 .steps2 .form-pagination {
    padding-top: 20px;
}
.spz_t1065 .steps3 .form-pagination{
    padding-top: 10px;
}
.spz_t1065 .form-pagination .multistepbullet {
    background-color: #CCC;
    height: 10px;
    width: 10px;
    border-radius: 50%;
}
.spz_t1065 .form-pagination .multistepbullet:nth-child(2) {
    margin: 0 14px;
}

.spz_t1065 .steps1 .form-pagination .multistepbullet:nth-child(1),
.spz_t1065 .steps2 .form-pagination .multistepbullet:nth-child(2),
.spz_t1065 .steps3 .form-pagination .multistepbullet:nth-child(3){
    background-color: #041E42;
    color: #fff;
}
.spz_t1065 .steps2 .form-pagination .multistepbullet:nth-child(1),
.spz_t1065 .steps3 .form-pagination .multistepbullet:nth-child(1),
.spz_t1065 .steps3 .form-pagination .multistepbullet:nth-child(2) {
    background-color: #03E7BB;
}
.spz_t1065 .steps2 .form-pagination .multistepbullet:nth-child(1):after,
.spz_t1065 .steps3 .form-pagination .multistepbullet:nth-child(1):after,
.spz_t1065 .steps3 .form-pagination .multistepbullet:nth-child(2):after{
    background-color: #041E42;
}
.spz_t1065 .form-pagination .multistepbullet span {
    z-index: 1;
}
.spz_t1065 .modal-logo {
    justify-content: center;
    display: flex;
}
.spz_t1065 .modal-logo img{
    width: 100%;
    width: 157.714px;
}
.spz_t1065 .modal-form {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
}
.spz_t1065 .modal-form .modal-get-form {
    width: 100%;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field {
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    text-align: center;
    max-width: 100%;
    width: 100% !important;
    margin-bottom: 48px;
}
.spz_t1065 .steps2 .modal-get-form .hs-form .hs-form-field {
    margin-bottom: 86px;
}
.spz_t1065 .steps2 .modal-get-form .hs-form .hs-form-field > label {
    width: 100%;
    max-width: 458px;
    justify-content: center;
    margin: 0 auto 40px !important;
}
.spz_t1065 .steps2 .modal-get-form .hs-form .hs-form-field > label+.hs-field-desc {
    margin: 0px auto 8px;
}
.spz_t1065 .modal-container.steps2 .modal-get-form .hs-form .hs-form-field.hs-fieldtype-radio {
    display: none;
}
.spz_t1065 .modal-container:not(.steps2) .modal-get-form .hs-form .hs-form-field.hs-fieldtype-checkbox {
    display: none;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field > label {
    color: #041E42;
    text-align: center !important;
    font-size: 32px;
    font-style: normal;
    font-family: Bitter;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.64px;
    position: static;
    opacity: 1;
    cursor: inherit;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    max-width: 410px;
    display: flex !important;
    margin: 0 auto 48px !important; 
}
.spz_t1065 .modal_form_wrapper .is-focused .float-label,
.spz_t1065 .modal_form_wrapper .is-filled .float-label {
    display: none !important;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field > label+.hs-field-desc {
    color: #00BFA5;
    font-family: 'Lato', Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    margin: 0px auto 8px;
    order: -1;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox {
    background: transparent;
    width: 100%;
    max-width: calc(50% - (12px/2));
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox:not(:last-child) {
    margin-bottom: 12px;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox label {
    position: relative;
    display: flex !important;
    align-items: center;
    min-height: 64px;
    background-color: #fff;
    border-radius: 4px;
    padding: 7px;
}

.spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container li.hs-form-radio {
    width: calc(33.33% - (32px/3));
    min-height: 32px;
    text-align: center;
}

.spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container li.hs-form-radio label {
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #041E42;
    position: relative;
    padding: 23px 10px 22px;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container li.hs-form-radio label input {
    border: 1px solid #858B98;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox label input[type="checkbox"],
.spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container li.hs-form-radio label input[type="radio"] {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: none;
    transition: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox label input[type="checkbox"] {
    border: 1px solid #C0C2D1;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox label input[type="checkbox"]:checked {
    border: none;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox label input[type="checkbox"]:checked,
.spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container li.hs-form-radio label input[type="radio"]:checked {
    background-color: #041E42;
    border-color: #041E42;
    border-radius: 4px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox label input[type="checkbox"]:checked + span:before,
.spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container li.hs-form-radio label input[type="radio"]:checked + span:before{
    background-image: url('//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/1013/frame_156_webp.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: none;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox label input[type="checkbox"]:checked + span{
    color: #fff;
    position: relative;
}

.spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container li.hs-form-radio label input[type="radio"]:checked + span {
    color: #64FFDA;
    position: relative;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container {
    padding: 0;
    list-style: none;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox label input {
    border: 0;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container li.hs-form-radio label.active {
    background: #041E42;
    color: #64FFDA;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field > .input {
    margin-right: 0;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container li.hs-form-radio img {
    position: absolute;
    width: 42px;
    height: 42px;
    object-fit: contain;
    top: 17px;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field ul li span {
    font-family: 'Lato', Arial, sans-serif;
    font-size: 18px;
    line-height: 27px;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    color:#041E42;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox label span {
    font-size: 16px;
    line-height: 19.2px;
    color: #041E42;
    position: relative;
    text-align: inherit;
    padding-right: 9px;
    padding-left: 49px;
}
.spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox label span:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    left: 0px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    border-radius: 4px;
    border: 1px solid #000;
    margin-left: 9px;
}
@media (max-width: 1024.98px) {
    .spz_t1065 .steps2 .modal-get-form .hs-form .hs-form-field {
        margin-bottom: 48px;
    }
    .spz_t1065 .steps2 .modal-get-form .hs-form .hs-form-field > label {
        margin: 0 auto 48px !important;
    }
    .spz_t1065 .steps2 .form-pagination {
        padding-top: 17px;
    }
    body.spz_t1065 .demo_form form.hs-form .form_title_row .hs-richtext {
        max-width: 100%;
    }
    .spz_t1065 .modal-form {
        max-width: 608px;
        margin: 30px auto;
    }
    .spz_t1065 .steps3 .modal-form {
        margin: 40px auto;
    }
    .spz_t1065 .steps3 .form-pagination {
        padding-top: 0;
    }
}
@media (max-width: 991.98px) {
    .spz_t1065 .modal_form_wrapper {
        background-image: url('//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/1017/bg_tablet.webp');
    }
    .spz_t1065 .modal-hero {
        padding: 90px 0 68px;
    }
}

@media (max-width: 767.98px) {
    .spz_t1065 .modal_form_wrapper {
        background-image: url('//res.cloudinary.com/spiralyze/image/upload/f_auto/jupiterone/1017/bg_mobile.webp');
    }
    .spz_t1065 .modal_form_wrapper .modal-left {
        border-radius: 0px 0px 16px 16px;
    }
    .spz_t1065 .modal-hero {
        padding: 90px 0 50px;
    }
    .spz_t1065 .modal-container {
        padding: 32px 16px 0;
    }
    .spz_t1065 .modalQuestionswrapper {
        padding: 32px 20px;
    }
    .spz_t1065 .modal-form {
        max-width: 100%;
        margin: 22px auto;
    }
    .spz_t1065 .modal-form .modal-get-form {
        max-width: 500px;
        margin: 0 auto;
    }
    .spz_t1065 .button-wrapper {
        display: flex;
        flex-direction: column;
        margin: 0;
    }
    .spz_t1065 .steps2 .modal-get-form .hs-form .hs-form-field {
        margin-bottom: 24px;
    }
    .spz_t1065 .steps2 .modal-get-form .hs-form .hs-form-field > label {
        margin-bottom: 24px !important;
    }
    .spz_t1065 .modal-get-form .hs-form .hs-form-field {
        margin-bottom: 24px;
    }
    .spz_t1065 .modal-get-form .hs-form .hs-form-field.hs-fieldtype-checkbox .hs-form-field input {
        width: 100% !important;
    }
    .spz_t1065 .modal-get-form .hs-form .hs-form-field > label {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.48px;
        margin-bottom: 24px !important;
    }
    .spz_t1065 .modal-get-form .hs-form .hs-form-field > label+.hs-field-desc {
        font-size: 14px;
        line-height: 18.2px;
        max-width: 100%; 
    }
    .spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container li.hs-form-radio label {
        padding: 18.5px 10px;
    }
    .spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox {
        max-width: 100%;
    }
    .spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox label span {
        text-align: inherit;
    }
    .spz_t1065 .steps2 .form-pagination {
        padding-top: 10px;
    }
    .spz_t1065 .steps3 .modal-form {
        margin: 32px auto 9px;
    }
    .spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container li.hs-form-radio:not(:last-child) {
        margin-bottom: 16px;
    }
}

/* steps1 and steps2 form comman css */

.spz_t1065 .hs-form-field .hs_message,
.spz_t1065 .hs-form-field > label .hs-form-required {
    display: none;
}

.spz_t1065 .hs-form-field input {
    font-family: 'Lato', Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-style: normal;
    background-color: transparent;
    color: #041E42;
    outline: none;
    height: 56px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #CCCCCC;
    padding: 15px;
    margin: 0;
    box-shadow: none;
    -webkit-box-shadow: none;
}
.spz_t1065 .modal_form_wrapper .hs-form-field input {
    -webkit-box-shadow: none;
}
.spz_t1065 .hs-form-field .hs-error-msgs {
    text-align: left;
    list-style: none;
    padding: 0;
    margin: 0;
}
.spz_t1065 .hs-form-field .hs-error-msgs label a {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 0 !important;
    margin-top: 4px !important;
    text-align: left;
    color: #041E42;
    text-decoration: none;
}
.spz_t1065 .hs-form-field .hs-error-msg {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #FF0000;
    margin-bottom: 0 !important;
    margin-top: 4px !important;
    text-align: left;
    cursor: inherit;
}

.spz_t1065 .hs_submit {
    width: 100%;
    text-align: center;
}
.spz_t1065 .hs_submit .hs-button {
    font-family: 'Lato', Arial, sans-serif;
    margin: 0 8px;
    padding: 15px 29px;
    background: #03E7BB;
    border-radius: 99px;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #041E42;
    width: auto;
    min-width: 140px;
    min-height: 60px;
    outline: none;
    cursor: pointer;
    border: none !important;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
}
.spz_t1065 .hs_submit .hs-button:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
    background: #00BFA5;
}
.spz_t1065 .hs_submit span.form_black {
    font-weight: 600;
    font-size: 18px;
    font-family: 'Lato', Arial, sans-serif;
    font-style: normal;
    line-height: 27px;
    text-align: center;
    color: #041E42;
    max-width: 140px;
    display: inline-block;
    width: 100%;
    min-height: 60px;
    outline: none;
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 100px;
    border: 1.5px solid #041E42;
    background: rgba(255, 255, 255, 0.04);
    margin: 0 8px;
    padding: 15px 29px;
}
.spz_t1065 .hs_submit span.form_black:hover {
    border-radius: 100px;
    background: #00BFA5;
    border: 1.5px solid #00BFA5;
}
.spz_t1065 .steps2 .hs_submit span.form_black {
    display: inline-block !important;
}

.spz_t1065 .previous-border {
    background-color: transparent;
    border: 1px solid #041E42;
    color: #041E42;
}
.spz_t1065 .previous-border:hover {
    border: none;
    color: #1B1C2B;
}
.spz_t1065 .hs_error_rollup {
    width: 100%;
}
.spz_t1065 .hs_error_rollup .hs-error-msgs {
    font-size: 16px;
    text-align: center;
    list-style: none;
    padding: 0;
    margin: 0;
}

.spz_t1065 .hs_error_rollup .hs-main-font-element {
    font-weight: 400;
    margin-bottom: 0px;
}
body.spz_t1065 .demo_form .hs_error_rollup + .hs_submit .hs-button {
    margin-top: 9px;
}
.spz_t1065 .modal-get-form .hs-form .hs_error_rollup {
    display: none;
}
@media (min-width: 1025px) and (max-width: 1279.98px) {
    .spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox {
        max-width: 100%;
    }
}
@media (max-width: 1024.98px) {
    .spz_t1065 .modal_form_wrapper .modalQuestions {
        width: 100%;
        max-width: 668px;
    }
}
@media (max-width: 767.98px) {
    .spz_t1065 .error-arrow {
        left: 50%;
        top: auto;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        bottom: -4px;
    }
    .spz_t1065 .steps2 .hs_submit .actions {
        display: flex;
        justify-content: center;
    }
    .spz_t1065 .modal-get-form .hs-form .hs-form-field ul.inputs-list.multi-container li.hs-form-radio {
        width: 100%;
    }
    .spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox label {
        flex-wrap: wrap;
        padding-right: 15px;
    }
    .spz_t1065 .modal-get-form .hs-form .hs-form-field li.hs-form-checkbox label span {
        font-size: 16px;
        line-height: 20.8px;
        text-align: inherit;
        padding-right: 10px;
        padding-left: 49px;
    }
    .spz_t1065 .steps2 .hs_submit span.form_black {
        margin-left: 0;
        max-width: 140px;
    }
    .spz_t1065 .steps1 .hs_submit .hs-button {
        margin: 0;
    }
    .spz_t1065 .hs_submit .hs-button {
        margin-left: 0px;
        margin-right: 0;
        min-width: 140px;
    }
    .spz_t1065 .form-pagination {
        padding-top: 10px;
    }
}
/* steps1 and steps2 form comman css  over*/

/* steps3 css */
.spz_t1065 .demo_form form.hs-form .hide {
	display: none;
}
.spz_t1065 .demo_form form.hs-form .form_title_row .hs-richtext {
    max-width: 560px;
    margin: 0 auto;
}
.spz_t1065 .demo_form form.hs-form .form_title_row {
    width: 100%;
    text-align: center;
	margin-bottom: 20px;
}
.spz_t1065 .demo_form form.hs-form .form_title_row h2 {
    color: #041E42;
    text-align: center;
    font-family: 'Lato', Arial, sans-serif !important;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 38.4px !important;
    margin-bottom: 8px;
}
.spz_t1065 .steps3 .demo_form form.hs-form .form_title_row h2 {
    font-family: Bitter !important;
    font-weight: 600 !important;
    line-height: 40px !important;
    letter-spacing: -0.64px;
}
.spz_t1065 .demo_form form.hs-form .form_title_row p {
    color: #041E42;
    text-align: center;
    font-family: 'Lato', Arial, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    max-width: 500px;
    margin: 8px auto 10px;
}
.spz_t1065 .steps3 .demo_form form.hs-form .form_title_row p {
    margin: 8px auto 20px;
}
.spz_t1065 .demo_form form.hs-form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    padding: 0;
}
.spz_t1065 .demo_form .hs-form-field {
    flex: 0 0 auto;
    width: 48.4%;
    border-radius: 4px;
    position: relative;
    margin: 0 0 16px;
}

.spz_t1065 .demo_form .hs-form-field input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #041E42;
    transition: background-color 5000s ease-in-out 0s;
}
.spz_t1065 .hs-form-field input::-moz-placeholder {
    color: #757575 !important;
    -webkit-text-fill-color: #757575;
    opacity: 1 !important;
    font-family: 'Lato', Arial, sans-serif;
    font-size: 16px;
    font-style: normal;
    line-height: 24px !important;
}
.spz_t1065 .hs-form-field input:-moz-placeholder {
    color: #757575 !important;
    -webkit-text-fill-color: #757575;
    opacity: 1 !important;
    font-family: 'Lato', Arial, sans-serif;
    font-size: 16px;
    font-style: normal;
    line-height: 24px !important;
}
.spz_t1065 .hs-form-field input::-webkit-input-placeholder {
    color: #757575 !important;
    -webkit-text-fill-color: #757575;
    opacity: 1 !important;
    font-family: 'Lato', Arial, sans-serif;
    font-size: 16px;
    font-style: normal;
    line-height: 24px !important;
}
.spz_t1065 .hs-form-field input:-ms-input-placeholder {
    color: #757575 !important;
    -webkit-text-fill-color: #757575;
    opacity: 1 !important;
    font-family: 'Lato', Arial, sans-serif;
    font-size: 16px;
    font-style: normal;
    line-height: 24px !important;
}
.spz_t1065 .hs-form-field.is-focused input::-webkit-input-placeholder,
.spz_t1065 .hs-form-field.is-filled input::-webkit-input-placeholder {
    opacity: 0 !important;
}
.spz_t1065 .hs-form-field.is-focused input::-moz-placeholder,
.spz_t1065 .hs-form-field.is-filled input::-moz-placeholder {
    opacity: 0 !important;
}
.spz_t1065 .hs-form-field.is-focused input:-moz-placeholder,
.spz_t1065 .hs-form-field.is-filled input:-moz-placeholder {
    opacity: 0 !important;
}
.spz_t1065 .hs-form-field.is-focused input:-ms-input-placeholder,
.spz_t1065 .hs-form-field.is-filled input:-ms-input-placeholder {
    opacity: 0 !important;
}
.spz_t1065 .hs-form-field.is-focused input {
    border-color: #041E42;
}
.spz_t1065 .hs-form-field.is-error input {
    border-color: #FF0000;
}

.spz_t1065 .demo_form .hs-form-field > label {
    position: absolute;
    top: 16px;
    left: 16px;
    font-family: 'Lato', Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #757575;
    -webkit-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    transition: all ease 0.3s;
	opacity: 0;
	pointer-events: none;
}
.spz_t1065 .demo_form .hs-form-field.is-focused > label,
.spz_t1065 .demo_form .hs-form-field.is-filled > label{
    font-size: 13px;
    line-height: 20px;
    top: -8px;
    left: 11px;
    padding: 0 5px;
    background: #fff;
    z-index: 3;
	opacity: 1;
	pointer-events: inherit;
}
.spz_t1065 .demo_form .hs-form-field.is-focused > label,
.spz_t1065 .demo_form .hs-form-field.is-error > label{
    color: #041E42;
}

.spz_t1065 .demo_form .hs_submit {
    width: 100%;
    margin: 10px 0 0;
	text-align: center;
}
.spz_t1065 .demo_form .hs_submit .hs-button {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    border: none;
    border-radius: 99px;
    outline: none;
    cursor: pointer;
    max-width: 192px;
    width: 100%;
    margin-top: 14px;
}
.spz_t1065 .splide__slide img {
    width: 100%;
    max-width: 200px;
    margin-top: 1px;
}
.spz_t1065 .modal-left-inner:before,
.spz_t1065 .modal-left-inner:after {
    content: "";
    position: absolute;
    width: 58px;
    height: 486px;
    top: 35px;
}
.spz_t1065 .modal-left-inner:before {
    background: linear-gradient(90deg, #041E42 0%, rgba(4, 30, 66, 0.00) 100%);
    left: 0%;
    z-index: 1;
    margin-right: 0px;
}
.spz_t1065 .modal-left-inner:after {
    right: 0%;
    margin-right: 0px;
    background: linear-gradient(-90deg, #041E42 0%, rgba(4, 30, 66, 0.00) 100%);
}
.spz_t1065 .socialProofSlider {
    margin-bottom: 20px;
}

@media (max-width: 1024.98px) { 
    .spz_t1065 .modal-left-inner:before,
    .spz_t1065 .modal-left-inner:after {
        top: 11px;
    }
    
}
@media (max-width: 991.98px) {
    .spz_t1065 .demo_form .hs_submit .hs-button {
        margin-top: 22px;
        margin-bottom: 8px;
    }
    .spz_t1065 .steps3 .demo_form form.hs-form .form_title_row p {
        margin: 8px auto 28px;
    }
}

@media (max-width: 767.98px) {
    .spz_t1065 .demo_form .hs-form-field {
        width: 100%;
    }
    .spz_t1065 .demo_form .hs-form-field input {
        height: 56px;
    }
    .spz_t1065 .demo_form .hs_submit {
        margin: 0;
    }
    .spz_t1065 .demo_form .hs_submit .hs-button {
        max-width: 192px;
        margin: 8px 0 23px !important;
    }
    .spz_t1065 .demo_form .error-arrow {
        left: 50%;
        top: auto;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        bottom: -4px;
    }
    .spz_t1065 .demo_form form.hs-form .form_title_row h2 {
        font-size: 24px;
        font-weight: 600;
        line-height: 28.8px;
    }
    .spz_t1065 .steps3 .demo_form form.hs-form .form_title_row h2 {
        font-size: 24px;
        line-height: 32px !important;
        letter-spacing: -0.48px;
    }
    .spz_t1065 .demo_form form.hs-form .form_title_row p {
        margin: 10px auto;
    }
    .spz_t1065 .steps3 .demo_form form.hs-form .form_title_row p {
        margin: 8px auto 4px;
    }
    .spz_t1065 .socialProofSlider {
        margin-bottom: 10px;
    }
    .spz_t1065 .splide__slide img {
        max-width: 93px;
        margin-top: 3px;
        margin-right: 17px;
    }
    .spz_t1065 .modal-left-inner:before,
    .spz_t1065 .modal-left-inner:after {
        top: 0px;
        height: 329px;
    }
}

/* steps3 css over*/


.spz_t1065 .integrationWrapper {
    padding-top: 30px;
    padding-bottom: 48px;
    /* min-height: 179px; */
}
.spz_t1065 .integrationItem_inner {
    align-items: center;
    min-height: 101px;
}
.spz_t1065 .integrationItem .item {
    width: 100%;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background: #566b88;
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    padding: 15px 30px;
    height: 100%;
    min-height: 80px;
    -webkit-transition: all 0.3s ease-in-out 0s;               
    transition: all 0.3s ease-in-out 0s;
}

.spz_t1065 .integrationWrapper .splide .is-active {
    background: #0D2B55;
    min-height: 101px;
}

.spz_t1065 .integrationItem .itemContent span {
    color: #36FCD6;
    font-family: 'Lato';
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: 26px;
    display: block;
    margin-bottom: 8px;
}
.spz_t1065 .integrationItem .itemContent p {
    color: #F5F5F5;
    font-family: 'Lato';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.5px;
    margin: 0;
}
.spz_t1065 .integrationItem .item:first-child .imgWrapper {
    display: flex;
    margin-top: -2px;
}

@media screen and (max-width: 1024.98px) {
    .spz_t1065 .modal_form_wrapper .integrationItem {
        padding: 0;
    }
    .spz_t1065 .integrationItem .item:first-child .imgWrapper {
        margin-top: -4px; 
    }
}
@media screen and (max-width: 991.98px) {
    .spz_t1065 .integrationWrapper {
        margin-top: -18px;
        padding-top: 0px;
        padding-bottom: 48px;
    }
    .spz_t1065 .modal_form_wrapper .modalQuestions {
        max-width: 580px;
    }
}

@media screen and (max-width: 767.98px) {
    .spz_t1065 .integrationItem .item {
        max-width: 287px;
        padding: 14px 16px;
    }
    .spz_t1065 .integrationWrapper {
        margin-top: -2px;
        padding-bottom: 28px;
    }
    .spz_t1065 .integrationItem_inner  {
        min-height: 104px;
    }
    .spz_t1065 .integrationWrapper .splide .is-active {
        min-height: 104px;
    }
    .spz_t1065 .integrationItem .itemContent span {
        font-size: 28px;
        font-weight: 900;
        line-height: 26px;
    }
    .spz_t1065 .integrationItem .itemContent p {
        font-size: 13px;
        font-weight: 400;
        line-height: 16.9px;
    }
    .spz_t1065 .integrationItem .item .imgWrapper {
        margin-top: -3px;
    }
}