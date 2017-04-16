@extends('template.layout')
@section('title')
    Home
@stop
@section('content')
        <div class="body-container" ng-controller="homeController">
            <section id="video-banner">
                <article>
                    <video autoplay="true" loop="loop" muted="muted" volume="0">
                        <source src="https://s3-eu-west-1.amazonaws.com/binate-website-s3/mp4-files/business-intro.mp4" type="video/mp4">
                    </video>
                    <div class="overlay-dotted"></div>
                    <div class="container">
                        <div class="col-md-12 video-banner-caption">
                            <h2 class="animated zoomIn">
                                <span class="heading-04">
                                    Building excellent software in an agile way. <br>Top class proactive developers. <br>You're fully in control.
                                </span>
                            </h2>
                            <a href="#" class="transparent-button" ng-click="salesQueryModal()">General Queries</a>
                        </div>
                    </div>
                </article>
            </section>

            <section id="about-us" class="">
                <article>
                    <div class="container-fullwidht">
                        <div class="col-md-6 about-us-image">&nbsp;</div>
                        <div class="col-md-6 color-white">
                            <div class="about-us-content">
                                <h4 class="heading-04">About Binate Solutions</h4>
                                <p> Businesses today are facing dynamic market conditions: changing consumer behaviour, new technology, and more data than ever before. To keep pace, they have to be more agile and respond more quickly to change. This environment
                                    demands more than traditional outsourcing...</p>
                                <p><a href="javascript:void(0)" ng-click="aboutDetailsView()" class="secondary-button-white">Details</a></p>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <!-- Templates -->
                        <script type="text/ng-template" id="aboutDetails">
                            <div class="dialog_header">
                                <h2>About Binate Solutions</h2>
                            </div>
                            <div class="dialog-content">
                                <p>Businesses today are facing dynamic market conditions: changing consumer behaviour, new technology, and more data than ever before. To keep pace, they have to be more agile and respond more quickly to change. This environment
                                    demands more than traditional outsourcing. </p>
                                <p>To help businesses meet these challenges, operate more effectively and become more competitive, Binate developed own Business Framework. It combined industries experience into a repeatable and scalable methodology. Binate
                                    Solutions has fundamentally transformed the way global business process outsourcing should be delivered.</p>
                            </div>
                        </script>
                        <!-- Templates -->
                    </div>
                </article>
            </section>

            <section id="services" parallax-background parallax-ratio="0.5">
                <article>
                    <div class="container color-white service-section">
                        <h3 class="heading-02 center-align margin-bottom-40">We Offer</h3>

                        <div class="col-md-4 services-item">
                            <div class="service-icon"><i class="li li-target"></i></div>
                            <div class="service-content-static">
                                <p class="margin-bottom-0 primary-color"><strong>Agile process</strong></p>
                                <p class="service-desc">
                                    <strong>Agile methodology</strong> is an alternative to traditional project management,...
                                </p>
                                <a href="javascript:void(0)" ng-click="agileDetails()" class="primary-button primary-button-onBlack">Details</a>
                            </div>
                        </div>

                        <!-- Templates -->
                        <script type="text/ng-template" id="agileDetailsId">
                            <div class="dialog_header">
                                <h2>Agile process</h2>
                            </div>
                            <div class="dialog-content">
                                <p><strong>Agile methodology</strong> is an alternative to traditional project management, typically used in software development. It helps teams respond to unpredictability through incremental, iterative work cadences, known
                                    as <strong>sprints</strong>. Hence instead of trying to deliver it all at once near the end, <strong>Agile</strong> methodologies builds software incrementally from the start of the project . Agile is an alternative
                                    to waterfall, or traditional sequential development. </p>

                                <p>In the Scrum method of <strong>Agile</strong>, work is confined to a regular, repeatable work cycle. Scrum <strong>sprints</strong> used to be 30 days long, but we advise one-week or two-weeks of <strong>sprints</strong>.
                                    Our <strong>sprints</strong> covers.</p>

                                <div class="dialog-list">
                                    <ul>
                                        <li>Manage / refine backlogs [through backlog refinement meeting].</li>
                                        <li>Sprint planning.</li>
                                        <li>Sprint Duration.</li>
                                        <li>Sprint retrospective.</li>
                                        <li>Sprint kickoff.</li>
                                        <li>Daily stand-up.</li>
                                        <li>Sprint Review Meeting.</li>
                                    </ul>
                                </div>
                                <p>In our Scrum idea, all the following three roles are being played properly:</p>
                                <div class="dialog-list list-style-number">
                                    <ol>
                                        <li>Product Owner</li>
                                        <li>Scrum Master</li>
                                        <li>Scrum Team</li>
                                    </ol>
                                </div>
                            </div>
                        </script>
                        <!-- Templates -->

                        <div class="col-md-4 services-item">
                            <div class="service-icon"><i class="li li-paper-plane"></i></div>
                            <div class="service-content-static">
                                <p class="margin-bottom-0 primary-color"><strong>low Cost</strong></p>
                                <p class="service-desc">
                                    Binate offers one of the lowest costs possible. As a result, our honourable clients...
                                </p>
                                <a href="javascript:void(0)" ng-click="lowCostDetails()" class="primary-button primary-button-onBlack">Details</a>
                            </div>
                        </div>

                        <!-- Templates -->
                        <script type="text/ng-template" id="lowDetailsId">
                            <div class="dialog_header">
                                <h2>Low Cost</h2>
                            </div>
                            <div class="dialog-content">
                                <p>Binate offers one of the lowest costs possible. As a result, our honourable clients can avail world class services, retaining all valuable employees. No need to worry about losing their precious assets.</p>
                            </div>
                        </script>
                        <!-- Templates -->

                        <div class="col-md-4 services-item last">
                            <div class="service-icon"><i class="li li-graph"></i></div>
                            <div class="service-content-static">
                                <p class="margin-bottom-0 primary-color"><strong>Your Control</strong></p>
                                <p class="service-desc">
                                    With Binate Solutions, you have your own people, who are working exclusively for you....
                                </p>
                                <a href="javascript:void(0)" ng-click="yourControllDetails()" class="primary-button primary-button-onBlack">Details</a>
                            </div>
                        </div>

                        <!-- Templates -->
                        <script type="text/ng-template" id="yourControllDetailsId">
                            <div class="dialog_header">
                                <h2>Your Control</h2>
                            </div>
                            <div class="dialog-content">
                                // <p>With Binate Solutions, you have your own people, who are working exclusively for you. It's your work, your team hence your instruction.</p>
                            </div>
                        </script>
                        <!-- Templates -->


                    </div>
                </article>
            </section>


            <section id="hierUs" class="padding-50-0">
                <article>
                    <div class="container terms-n-condition">

                        <div class="col-md-12 center-align">
                            <h3 class="heading-03 margin-bottom-40">Build <span class="primary-color">TEAM</span> with us</h3>
                            <p class="heading-05 margin-bottom-40">For prices and more information on software development, team management, project management and functional design, please contact us.</p>
                            <a href="javascript:void(0)" ng-click="teamqueryModal()" class="primary-button">Make a Team</a>
                        </div>
                        <!-- Templates -->
                        <script type="text/ng-template" id="queryModal">
                            <div ng-hide="afterSubmit" class="dialog_header">
                                <div class="col-md-12 margin-bottom-30">
                                    <h2>Request for a quotation</h2>
                                </div>
                            </div>
                            <form data-ng-hide="afterSubmit" data-ng-click="clickedOnModalBody($event)">
                                <div class="dialog-content animated fadeIn">
                                    <div class="field-row check-boxarea">
                                        <div class="col-md-3">
                                            <p class="margin-bottom-0">
                                                <label class="custom-checkbox custom-checkbox-squire {{ for_phone ? 'selected-pm' : '' }}">
                                                    <span><input type="checkbox" name="Quote Request" data-ng-model="for_phone" /></span>
                                                    <i>Request for Call</i>
                                                </label>
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <p class="margin-bottom-0">
                                                <label class="custom-checkbox custom-checkbox-squire {{ for_email ? 'selected-pm' : '' }}">
                                                    <span class="inline-field"><input type="checkbox" name="Quote Request" data-ng-model="for_email" /></span>
                                                    <i class="inline-field">Request for an Email</i>
                                                </label>
                                            </p>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="col-md-12"><span data-ng-if="contactError" class="error-message checkbox-error">At least 1 contact approach is required.</span></div>
                                    </div>

                                    <div class="field-row">
                                        <div class="col-md-6">
                                            <input type="text" class="custom-field width-block" placeholder="Full Name" data-ng-model="fullName">
                                            <span data-ng-if="fullNameError" class="error-message">Full name is required</span>
                                        </div>
                                        <!--
                                        <div class="col-md-6">
                                            <div custom-select="f for f in countries | filter: $searchTerm" data-ng-model="country" autofocus></div>
                                            <span data-ng-if="countryError" class="error-message">Country is required</span>
                                        </div>
                                        -->
                                        <div class="clear"></div>
                                    </div>
                                    <div class="field-row">
                                        <div class="col-md-6 responsive-margin-20">
                                            <input type="email" class="custom-field width-block" placeholder="Email" data-ng-model="email">
                                            <span data-ng-if="emailError" class="error-message">Valid email is required</span>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" class="custom-field width-block" placeholder="Phone Number" data-ng-model="phoneNumber">
                                            <span data-ng-if="phoneNumberError" class="error-message">Valid phone number is required</span>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="field-row">
                                        <div class="col-md-12">
                                            <p class="margin-bottom-10 heading-05">Preferred technologies:</p>
                                        </div>
                                    </div>

                                    <div class="binded-technologies">
                                        <p data-ng-repeat="item in selectedTechnologyList">{{item.name}}
                                            <ng-md-icon icon="close" size="20" class="remove" data-ng-click="removeTechnology($index)"></ng-md-icon>
                                        </p>
                                        <div class="clear"></div>
                                    </div>

                                    <div class="field-row">
                                        <div class="col-md-6 responsive-margin-20 check-boxarea preferred-technology">
                                            <a href="javascript:void(0)" class="dropdown-custom dropdown-btn" data-ng-click="open=!open">Select Technologies
                                                <ng-md-icon icon="keyboard_arrow_down" size="25"></ng-md-icon>
                                            </a>

                                            <div class="dropdown-list dropdown-panel" ng-class="{expanded: open, collapsed: !open}">
                                                <!--<input type="text" placeholder="Search Technology" class="auto-complete-search" />-->
                                                <p>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ NET ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="NET" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>.NET</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Ajax ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Ajax" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Ajax</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ CSS ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="CSS" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>CSS</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Delphi ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Delphi" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Delphi</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Flash ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Flash" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Flash</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ JSP ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="JSP" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>JSP</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Java ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Java" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Java</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Drupal ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Drupal" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Drupal</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ MySQL ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="MySQL" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>MySQL</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ PHP ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="PHP" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>PHP</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Python ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Python" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Python</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ VB ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="VB" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>VB</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ XML ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="XML" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>XML</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ F ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="F" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>F#</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Share_Point ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Share_Point" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Share Point</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ ASP ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="ASP" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>ASP</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ C_C_plus_plus ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="C_C_plus_plus" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>C/C++</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Cfusion ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Cfusion" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Cfusion</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ DHTML ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="DHTML" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>DHTML</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Flex ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Flex" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Flex</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Javascript ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Javascript" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Javascript</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Joomla ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Joomla" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Joomla</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ MS_SQL ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="MS_SQL" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>MS SQL</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Oracle ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Oracle" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Oracle</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Perl_CGI ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Perl_CGI" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Perl/CGI</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Scripts ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Scripts" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Scripts</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ XHTML ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="XHTML" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>XHTML</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ C_sharp ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="C_sharp" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>C#</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Objective_C ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Objective_C" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Objective C</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Ruby_on_Rails ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Ruby_on_Rails" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Ruby on Rails</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Android ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Android" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Android</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Windows_Mobile ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Windows_Mobile" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Windows Mobile</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Symbian ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Symbian" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Symbian</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Apple ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Apple" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Apple</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Blackberry ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Blackberry" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Blackberry</i>
                                                    </label>
                                                    <label class="custom-checkbox custom-checkbox-squire {{ Palm_OS ? 'selected-pm' : '' }}">
                                                        <span><input type="checkbox" data-ng-model="Palm_OS" data-ng-click="technologyChanged($event)" /></span>
                                                        <i>Palm OS</i>
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="field-row">
                                        <div class="col-md-12">
                                            <textarea class="custom-textarea" placeholder="Message" data-ng-model="message"></textarea>
                                            <span data-ng-if="messageError" class="error-message">Valid message details is required</span>
                                        </div>
                                        <div class="clear"></div>
                                    </div>


                                    <div class="field-row">
                                        <div class="col-md-12 ">
                                            <div class="basic-loader" data-ng-if="isSubmitButtonDisabled"></div>
                                            <button type="submit" data-ng-click="submittedQuotation()" class="primary-button pull-right" data-ng-disabled="isSubmitButtonDisabled">Submit</button>
                                        </div>
                                        <div class="clear"></div>
                                    </div>

                                    <div class="clear"></div>
                                </div>
                            </form>
                            <div data-ng-if="afterSubmit&&quotationRequestError==false" class="dialog-content dialog-content-onSubmit center-align animated fadeIn">
                                <h3 class="heading-03">Thanks!</h3>
                                <p class="primary-color heading-05">Successfully submitted your request. We will contact you very soon.</p>
                            </div>
                            <div data-ng-if="quotationRequestError" class="dialog-content dialog-content-onSubmit center-align animated fadeIn">
                                <p class="error-color heading-04">Oops! Something went wrong.</p>
                                <p class="heading-06">An unexpected error has occurred,
                                    <a href="javascript:void(0)" class="primary-color" ng-click="afterSubmit = afterSubmit ? false : true">Try again</a>
                                </p>
                            </div>
                        </script>
                        <script type="text/ng-template" id="saleQueryModal">
                            <div ng-hide="afterSubmit" class="dialog_header">
                                <div class="col-md-12 margin-bottom-30">
                                    <h2>General Query</h2>
                                </div>
                            </div>
                            <form data-ng-hide="afterSubmit" data-ng-click="clickedOnModalBody($event)">
                                <div class="dialog-content animated fadeIn">
                                    <div class="field-row check-boxarea">
                                        <div class="col-md-3">
                                            <p class="margin-bottom-0">
                                                <label class="custom-checkbox custom-checkbox-squire {{ for_phone ? 'selected-pm' : '' }}">
                                                    <span><input type="checkbox" name="Quote Request" data-ng-model="for_phone" /></span>
                                                    <i>Request for Call</i>
                                                </label>
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <p class="margin-bottom-0">
                                                <label class="custom-checkbox custom-checkbox-squire {{ for_email ? 'selected-pm' : '' }}">
                                                    <span class="inline-field"><input type="checkbox" name="Quote Request" data-ng-model="for_email" /></span>
                                                    <i class="inline-field">Request for an Email</i>
                                                </label>
                                            </p>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="col-md-12"><span data-ng-if="contactError" class="error-message checkbox-error">At least 1 contact approach is required.</span></div>
                                    </div>

                                    <div class="field-row">
                                        <div class="col-md-6">
                                            <input type="text" class="custom-field width-block" placeholder="Full Name" data-ng-model="fullName">
                                            <span data-ng-if="fullNameError" class="error-message">Full name is required</span>
                                        </div>
                                        <!--
                                        <div class="col-md-6">
                                            <div custom-select="f for f in countries | filter: $searchTerm" data-ng-model="country" autofocus></div>
                                            <span data-ng-if="countryError" class="error-message">Country is required</span>
                                        </div>
                                        -->
                                        <div class="clear"></div>
                                    </div>
                                    <div class="field-row">
                                        <div class="col-md-6 responsive-margin-20">
                                            <input type="email" class="custom-field width-block" placeholder="Email" data-ng-model="email">
                                            <span data-ng-if="emailError" class="error-message">Valid email is required</span>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" class="custom-field width-block" placeholder="Phone Number" data-ng-model="phoneNumber">
                                            <span data-ng-if="phoneNumberError" class="error-message">Valid phone number is required</span>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="field-row">
                                        <div class="col-md-12">
                                            <textarea class="custom-textarea" placeholder="Message" data-ng-model="message"></textarea>
                                            <span data-ng-if="messageError" class="error-message">Valid message details is required</span>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="field-row">
                                        <div class="col-md-12 ">
                                            <div class="basic-loader" data-ng-if="isSubmitButtonDisabled"></div>
                                            <button type="submit" data-ng-click="submitSalesQuery()" class="primary-button pull-right" data-ng-disabled="isSubmitButtonDisabled">Submit</button>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </form>
                            <div data-ng-if="afterSubmit&&quotationRequestError==false" class="dialog-content dialog-content-onSubmit center-align animated fadeIn">
                                <h3 class="heading-03">Thanks!</h3>
                                <p class="primary-color heading-05">Successfully submitted your query. We will contact you very soon.</p>
                            </div>
                            <div data-ng-if="quotationRequestError" class="dialog-content dialog-content-onSubmit center-align animated fadeIn">
                                <p class="error-color heading-04">Oops! Something went wrong.</p>
                                <p class="heading-06">An unexpected error has occurred,
                                    <a href="javascript:void(0)" class="primary-color" ng-click="afterSubmit = afterSubmit ? false : true">Try again</a>
                                </p>
                            </div>
                        </script>
                        <!-- Templates -->

                    </div>
                </article>
            </section>

            <section class="white-section light-blue-bg">
                <article>
                    <div class="banner-section">
                        <ul rn-carousel rn-carousel-auto-slide rn-carousel-index="carouselIndex" rn-carousel-duration="500" rn-carousel-controls-allow-loop rn-carousel-pause-on-hover>
                            <li ng-repeat="bannerCap in bannerImages">
                                <div class="banner-content" layout layout-align="center center" ng-style="{'background-image': 'url(' + bannerCap.img + ')'}">
                                    <div class="banner-caption ">
                                        <p class="caption-text margin-bottom-30 {{bannerCap.captionAlign}}">{{bannerCap.title1}}</p>
                                        <a href="#" class="primary-button primary-button-onBlack" ng-click="teamqueryModal()">Start hire</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div rn-carousel-indicators ng-if="bannerImages.length > 1" slides="bannerImages" rn-carousel-index="carouselIndex" class="custom-indicator"></div>
                    </div>
                </article>
            </section>

            <section id="career">
                <article>
                    <div class="container">
                        <div class="col-md-6 career-content">
                            <h3 class="heading-03">Careers in <span class="primary-color">BINATE </span></h3>
                            <p>At Binate, one of our values is to "Grow As a Team." It's in our DNA to prioritize teamwork and develop our people. By working together, we achieve great things for clients and create opportunities to build rewarding careers.
                                You can be part of that when you join our team. And it's all at your fingertips!</p>
                            <a href="career.html" class="primary-button">View Positons</a>
                        </div>
                        <div class="col-md-6 career-images">
                            &nbsp;
                        </div>
                    </div>
                </article>
            </section>


        </div>
        <!--Body container end-->

        <footer-section></footer-section>

    </div>

@stop
