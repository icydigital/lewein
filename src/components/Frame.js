import React from 'react';
import { NavLink } from "react-router-dom";
// import headerVideo from "../assets/Chaampion_Handy.mp4";
import InstagramIcon from "../assets/2227.png";
import introGif from "../assets/Gif_Banner_Handy.gif";

export class Header extends React.Component {
  constructor (props) {
    super(props)
    this.active = {
      "backgroundColor": ""
    }
  }
  render () {
    return (
      <div className="NavBarHeader">
        <div className="HomeLogoHeader">
          <div className="leweinLinkHeader">
            <NavLink className="leweinLink" exact to="/">Lewein</NavLink>
          </div>
        </div>
        {/* <div className="LinkHeader">
          <NavLink className="serviceLink" to="/sound">Sound</NavLink>
          <NavLink className="musicLink" to="/music">Music</NavLink>
          <NavLink className="companyLink" to="/art">Art</NavLink>
        </div> */}
      </div>
    )
  }
}

export class AppHeader extends React.Component {
  render () {
    return (
      <div className="AppHeader">
        <img src={introGif} class="leweinChampionGif" alt="My GIF"/>
        <Header/>
      </div>
    )
  }
}

export class NavHeader extends React.Component {
  render () {
    return (
      <div class="NavHeader">
        <Header/>
          Logo leftbound links rightbound
      </div>
    )
  }
}

export class HomeFooter extends React.Component {
  constructor (props) {
    super(props)
    this.active = {
      "backgroundColor": ""
    }
  }
  render () {
    return (
      <div className="AppFooter">
        <div className="FooterItem"><a className="" href="https://www.instagram.com/lewein/" target="_blank" rel="noreferrer"> <img className="InstagramIconCC" src={InstagramIcon} alt=""></img></a></div>
        <div className="FooterItem"><NavLink className="FooterLinkTo" exact to="/imprint">Imprint</NavLink></div>
        <div className="FooterItem"><NavLink className="FooterLinkTo" exact to="/privacypolicy">Privacy Policy</NavLink></div>
      </div>
    )
  }
}

export class Footer extends React.Component {
  render () {
    return (
      <div className="AppFooter">
        <div className="FooterItem"><NavLink className="FooterLinkTo" exact to="/">Home</NavLink>  </div>
        <div className="FooterItem"><a className="" href="https://www.instagram.com/lewein/" target="_blank" rel="noreferrer"> <img className="InstagramIconCC" src={InstagramIcon} alt=""></img></a></div>
        <div className="FooterItem"><NavLink className="FooterLinkTo" exact to="/imprint">Imprint</NavLink></div>
        <div className="FooterItem"><NavLink className="FooterLinkTo" exact to="/privacypolicy">Privacy Policy</NavLink></div>
      </div>
    )
  }
}

export class Imprint extends React.Component {
  render () {
    return (
      <div className="ImprintContainer">
        <div className="OtherLogoHeader">
          <div className="leweinLinkHeader">
          <NavLink className="OtherHeaderLinkTo" exact to="/">Lewein</NavLink>
          </div>
        </div>
        <div className="ImprintText">
          <div font-weight="bold">Imprint</div>
          <br></br>
          Leon Weinhold
          <br></br>
          Isestr. 47 
          <br></br>
          20144 Hamburg
          <br></br>
          E-Mail: info@lewein.com
          <br></br>
        </div>
        <Footer/>
      </div>
    )
  }
}

export class PrivacyPolicy extends React.Component {
  render () {
    return (
      <div className="PrivacyPolicyContainer">
        <div className="OtherLogoHeader">
          <div className="leweinLinkHeader">
            <NavLink className="OtherHeaderLinkTo" exact to="/">Lewein</NavLink>
          </div>        
        </div>
        <div className="PrivacyPolicyText">
          Privacy Policy
          <br></br>
          <br></br>
          Der Schutz deiner Daten ist uns wichtig. Wir verwenden Cookies und ähnliche Technologien, um dir auf unserer Website ein optimales Erlebnis zu ermöglichen. 
          <br></br>
          <br></br>

          1) Information über die Erhebung personenbezogener Daten und Kontaktdaten des Verantwortlichen 
          <br></br>
          <br></br>
          1.1 Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse. Im Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden können.
          <br></br>
          <br></br>
          1.2 Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Leon Weinhold, Isestr. 47, 20144 Hamburg, Deutschland, E-Mail: info@lewein.com. Der für die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
          <br></br>
          <br></br>

          1.3 Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Sie können eine verschlüsselte Verbindung an der Zeichenfolge „https://“ und dem Schloss-Symbol in Ihrer Browserzeile erkennen.
          <br></br>
          <br></br>

          2) Datenerfassung beim Besuch unserer Website
          <br></br>
          <br></br>
          Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser an unseren Server übermittelt (sog. „Server-Logfiles“). Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen die Website anzuzeigen: 
          <br></br>
          <br></br>
          - Unsere besuchte Website <br></br>
          - Datum und Uhrzeit zum Zeitpunkt des Zugriffes <br></br>
          - Menge der gesendeten Daten in Byte <br></br>
          - Quelle/Verweis, von welchem Sie auf die Seite gelangten <br></br>
          - Verwendeter Browser <br></br>
          - Verwendetes Betriebssystem <br></br>
          - Verwendete IP-Adresse (ggf.: in anonymisierter Form) <br></br> <br></br>
          Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
          <br></br>
          <br></br>
          3) Hosting & Content-Delivery-Network
          <br></br>
          <br></br>
          All-inkl Deutschland Hauptstraße 68, 02742 Neusalza-Spremberg
          <br></br>
          <br></br>
          4) Cookies
          <br></br>
          <br></br>
          Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir Cookies, also kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Teilweise werden diese Cookies nach Schließen des Browsers automatisch wieder gelöscht (sog. „Session-Cookies“), teilweise verbleiben diese Cookies länger auf Ihrem Endgerät und ermöglichen das Speichern von Seiteneinstellungen (sog. „persistente Cookies“). Im letzteren Fall können Sie die Speicherdauer der Übersicht zu den Cookie-Einstellungen Ihres Webbrowsers entnehmen.
          Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können.
          Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer Website eingeschränkt sein kann.
          <br></br>
          <br></br>
          5) Kontaktaufnahme
          <br></br>
          <br></br>
          Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden – ausschließlich zum Zweck der Bearbeitung und Beantwortung Ihres Anliegens und nur im dafür erforderlichen Umfang – personenbezogene Daten verarbeitet. Rechtsgrundlage für die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf einen Vertrag ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden gelöscht, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen
          <br></br>
          <br></br>
          6) Nutzung von Kundendaten zur Direktwerbung
          <br></br>
          <br></br>
          - Newsletter-Versand via klaviyo          
          <br></br>
          <br></br>
          Der Versand unserer E-Mail-Newsletter erfolgt über diesen Anbieter: Klaviyo, 225 Franklin St, Boston, MA 02110, USA
          Auf Basis unseres berechtigten Interesses an einem effektiven und nutzerfreundlichen Newsletter-Marketing geben wir Ihre bei der Newsletter-Anmeldung bereitgestellten Daten gem. Art. 6 Abs. 1 lit. f DSGVO an diesen Anbieter weiter, damit dieser den Newsletterversand in unserem Auftrag übernimmt.
          Vorbehaltlich Ihrer ausdrücklichen Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO führt der Anbieter darüber hinaus eine statistische Erfolgsauswertung von Newsletter-Kampagnen mittels Web Beacons bzw. Zählpixel in den versendeten E-Mails durch, die Öffnungsraten und spezifische Interaktionen mit den Inhalten des Newsletters messen können. Dabei werden auch Endgeräteinformationen (z.B. Zeitpunkt des Aufrufs, IP-Adresse, Browsertyp und Betriebssystem) erhoben und ausgewertet, aber nicht mit anderen Datenbeständen zusammengeführt.
          Ihre Einwilligung zum Newsletter-Tracking können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
          Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der die Daten unserer Seitenbesucher schützt und eine Weitergabe an Dritte untersagt.
          Für die Übermittlung von Daten in die USA beruft sich der Anbieter auf Standardvertragsklauseln der Europäischen Kommission, welche die Einhaltung des europäischen Datenschutzniveaus sicherstellen sollen.
          6.1 Im Falle des Abbruchs Ihres Einkaufs bei uns vor Abschluss der Bestellung haben Sie die Möglichkeit, per E-Mail einmalig an den Inhalt Ihres virtuellen Warenkorbs erinnert zu werden.Pflichtangabe für die Übersendung dieser Erinnerung ist allein Ihre E-Mailadresse. Die Angabe weiterer Daten ist freiwillig und wird ggf. verwendet, um Sie persönlich ansprechen zu können. Für den Mailversand verwenden wir das sog. Double Opt-in Verfahren, mit dem sichergestellt wird, dass Sie eine Benachrichtigung erst erhalten, wenn Sie uns durch Betätigung eines an die angegebene Mailadresse versandten Verifizierungslinks ausdrücklich Ihre diesbezügliche Einwilligung bestätigt haben.
          Mit der Aktivierung des Bestätigungslinks erteilen Sie uns Ihre Einwilligung für die Nutzung Ihrer personenbezogenen Daten gemäß Art. 6 Abs. 1 lit. a DSGVO für die Versendung einer Warenkorb-Erinnerung. Hierbei speichern wir Ihre vom Internet Service-Provider (ISP) eingetragene IP-Adresse sowie das Datum und die Uhrzeit der Anmeldung, um einen möglichen Missbrauch Ihrer E-Mail- Adresse zu einem späteren Zeitpunkt nachvollziehen zu können. Die von uns bei der Anmeldung zu unserem E-Mail-Benachrichtigungsdienst erhobenen Daten werden streng zweckgebunden verwendet.
          Sie können die Warenkorb-Erinnerungen jederzeit durch entsprechende Nachricht an den eingangs genannten Verantwortlichen abbestellen. Nach erfolgter Abmeldung wird Ihre E-Mailadresse unverzüglich aus unserem hierfür eingerichteten Verteiler gelöscht, soweit Sie nicht ausdrücklich in eine weitere Nutzung Ihrer Daten eingewilligt haben oder wir uns eine darüber hinausgehende Datenverwendung vorbehalten, die gesetzlich erlaubt ist und über die wir Sie in dieser Erklärung informieren.
          <br></br>
          <br></br>
          8) Webanalysedienste
          <br></br>
          <br></br>
          Google (Universal) Analytics
          Diese Website benutzt Google (Universal) Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland ("Google"). Google (Universal) Analytics verwendet sog. "Cookies", das sind Textdateien, die auf Ihrem Endgerät gespeichert werden und die eine Analyse Ihrer Nutzung der Website ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich der gekürzten IP-Adresse) werden in der Regel an einen Server von Google übertragen und dort gespeichert, hierbei kann es auch zu einer Übermittlung an die Server der Google LLC. in den USA kommen.
          Diese Website verwendet Google (Universal) Analytics ausschließlich mit der Erweiterung "_anonymizeIp()", die eine Anonymisierung der IP-Adresse durch Kürzung sicherstellt und eine direkte Personenbeziehbarkeit ausschließt. Durch die Erweiterung wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google LLC.in den USA übertragen und dort gekürzt. In unserem Auftrag wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen uns gegenüber zu erbringen. Dabei wird die im Rahmen von Google (Universal) Analytics von Ihrem Browser übermittelte IP-Adresse nicht mit anderen Daten von Google zusammengeführt.
          Google Analytics ermöglicht über eine spezielle Funktion, die sog. „demografischen Merkmale“, darüber hinaus die Erstellung von Statistiken mit Aussagen über Alter, Geschlecht und Interessen der Seitenbesucher auf Basis einer Auswertung von interessenbezogener Werbung und unter Hinzuziehung von Drittanbieterinformationen. Dies erlaubt die Definition und Differenzierung von Nutzerkreisen der Webseite zum Zwecke der zielgruppenoptimierten Ausrichtung von Marketingmaßnahmen. Über die „demografischen Merkmale“ erfasste Datensätze können jedoch keiner bestimmten Person zugeordnet werden.
          Details zu den durch Google Analytics angestoßenen Verarbeitungen und zum Umgang Googles mit Daten von Websites finden Sie hier: https://policies.google.com/technologies/partner-sites
          Alle oben beschriebenen Verarbeitungen, insbesondere das Setzen von Google Analytics-Cookies für das Auslesen von Informationen auf dem verwendeten Endgerät, werden nur dann vollzogen, wenn Sie uns gemäß Art. 6 Abs. 1 lit. a DSGVO dazu Ihre ausdrückliche Einwilligung erteilt haben. Ohne diese Einwilligungserteilung unterbleibt der Einsatz von Google Analytics während Ihres Seitenbesuchs.
          Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Um Ihren Widerruf auszuüben, deaktivieren Sie diesen Dienst bitte in dem auf der Webseite bereitgestellten „Cookie-Consent-Tool“. Wir haben mit Google für die Nutzung von Google Analytics einen Auftragsverarbeitungsvertrag abgeschlossen, mit dem Google verpflichtet wird, die Daten unserer Seitenbesucher zu schützen und sie nicht an Dritte weiter zu geben.
          Für die Übermittlung von Daten aus der EU in die USA beruft sich Google hierbei auf sog. Standarddatenschutzklauseln der Europäischen Kommission, welche die Einhaltung des europäischen Datenschutzniveaus in den USA gewährleisten sollen.
          Weitere Hinweise zu Google (Universal) Analytics finden Sie hier: https://policies.google.com/privacy?hl=de&gl=de
          <br></br>
          <br></br>
          9) Seitenfunktionalitäten
          <br></br>
          <br></br>
          9.1 Facebook Plugins mit 2-Klick-Lösung
          Auf unserer Website werden sogenannte Social Plugins ("Plugins") des sozialen Netzwerkes Facebook verwendet, das von der Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland ("Facebook") betrieben wird.
          Um den Schutz Ihrer Daten beim Besuch unserer Website zu erhöhen, sind die Plugins zunächst deaktiviert mittels sogenannter „2-Klick“- Lösung in die Seite eingebunden. Deaktivierte Plugins erkennen Sie daran, dass diese grau hinterlegt sind. Diese Einbindung gewährleistet, dass beim Aufruf einer Seite unseres Webauftritts, die solche Plugins enthält, noch keine Verbindung mit den Servern von Facebook hergestellt wird. Erst wenn Sie die Plugins aktivieren und damit gemäß Art. 6 Abs. 1 lit. a DSGVO Ihre Einwilligung in die Datenübermittlung erteilen, stellt Ihr Browser eine direkte Verbindung zu den Servern von Facebook her. Der Inhalt des jeweiligen Plugins wird direkt an Ihren Browser übermittelt und in die Seite eingebunden. Das Plugin übermittelt dann Daten (einschließlich Ihrer IP-Adresse) an Facebook. Wir haben keinen Einfluss auf den Umfang der Daten, die Facebook mit Hilfe der Plugins erhebt. Nach unserem Kenntnisstand erhält Facebook jedenfalls Informationen darüber, welche unserer Websites Sie aktuell und zuvor aufgerufen haben. Durch die Einbindung der Plugins erhält Facebook auch dann die Informationen, dass Ihr Browser die entsprechende Seite unseres Webauftritts aufgerufen hat, wenn Sie kein Profil bei Facebook besitzen oder gerade nicht eingeloggt sind. Die erhobenen Informationen (einschließlich Ihrer IP-Adresse) werden von Ihrem Browser direkt an einen Server von Facebook Inc. in die USA übermittelt und dort gespeichert. Wenn Sie mit den Plugins interagieren, wird die entsprechende Information ebenfalls direkt an einen Server von Facebook übermittelt und dort gespeichert. Die Informationen werden außerdem bei Facebook veröffentlicht und dort Ihren Kontakten angezeigt.
          Sie können Ihre Einwilligung jederzeit widerrufen indem Sie das aktivierte Plugin durch erneutes Anklicken wieder deaktivieren. Der Widerruf hat jedoch keinen Einfluss auf die Daten, die bereits an Facebook übertragen wurden.
          Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Facebook sowie Ihre diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre entnehmen Sie bitte den Datenschutzhinweisen von Facebook: https://www.facebook.com/policy.php
          <br></br>
          <br></br>
          9.2 Instagram-Plugin als Shariff-Lösung
          Auf unserer Website werden sogenannte Social Plugins („Plugins“) des Online-Dienstes Instagram verwendet, das von der Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland („Facebook“) betrieben wird.
          Um den Schutz Ihrer Daten beim Besuch unserer Website zu erhöhen, sind diese Schaltflächen nicht uneingeschränkt als Plugins, sondern lediglich unter Verwendung eines HTML-Links in die Seite eingebunden. Durch diese Art der Einbindung wird gewährleistet, dass beim Aufruf einer Seite unserer Website, die solche Schaltflächen enthält, noch keine Verbindung mit den Servern von Instagram hergestellt wird. Wenn Sie auf die Schaltfläche klicken, öffnet sich ein neues Browserfenster und ruft die Seite von Instagram auf, auf der Sie (ggf. nach Eingabe Ihrer Login-Daten) mit den dortigen Plugins interagieren können.
          Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Instagram sowie Ihre diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre entnehmen Sie bitte den Datenschutzhinweisen von Instagram: https://help.instagram.com/155833707900388/
          <br></br>
          <br></br>
          9.3 Verwendung von Youtube-Videos
          Diese Website nutzt die Youtube-Einbettungsfunktion zur Anzeige und Wiedergabe von Videos des Anbieters „Youtube“, der zu der Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland („Google“) gehört.
          Hierbei wird der erweiterte Datenschutzmodus verwendet, der nach Anbieterangaben eine Speicherung von Nutzerinformationen erst bei Wiedergabe des/der Videos in Gang setzt. Wird die Wiedergabe eingebetteter Youtube-Videos gestartet, setzt der Anbieter „Youtube“ Cookies ein, um Informationen über das Nutzerverhalten zu sammeln. Hinweisen von „Youtube“ zufolge dienen diese unter anderem dazu, Videostatistiken zu erfassen, die Nutzerfreundlichkeit zu verbessern und missbräuchliche Handlungsweisen zu unterbinden. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet, wenn Sie ein Video anklicken. Wenn Sie die Zuordnung mit Ihrem Profil bei YouTube nicht wünschen, müssen Sie sich vor Aktivierung des Buttons ausloggen. Ihnen steht ein Widerspruchsrecht zu gegen die Bildung dieser Nutzerprofile, wobei Sie sich zur Ausübung dessen an YouTube richten müssen. Im Rahmen der Nutzung von Youtube kann es auch zu einer Übermittlung von personenbezogenen Daten an die Server der Google LLC. in den USA kommen.
          Unabhängig von einer Wiedergabe der eingebetteten Videos wird bei jedem Aufruf dieser Website eine Verbindung zum Google-Netzwerk aufgenommen, was ohne unseren Einfluss weitere Datenverarbeitungsvorgänge auslösen kann.
          Alle oben beschriebenen Verarbeitungen, insbesondere das Auslesen von Informationen auf dem verwendeten Endgerät über das Tracking-Pixel, werden nur dann vollzogen, wenn Sie uns gemäß Art. 6 Abs. 1 lit. a DSGVO dazu Ihre ausdrückliche Einwilligung erteilt haben. Ohne diese Einwilligungserteilung unterbleibt der Einsatz von Youtube-Videos während Ihres Seitenbesuchs.
          Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Um Ihren Widerruf auszuüben, deaktivieren Sie diesen Dienst bitte in dem auf der Webseite bereitgestellten „Cookie-Consent-Tool“ über alternative, Ihnen auf der Website mitgeteilte Möglichkeiten.
          Weitere Informationen zum Datenschutz bei „Youtube“ finden Sie in den Youtube-Nutzungsbedingungen unter https://www.youtube.com/static?template=terms sowie in der Datenschutzerklärung von Google unter https://www.google.de/intl/de/policies/privacy
          <br></br>
          <br></br>
          9.4 Verwendung von Vimeo-Videos
          Auf unserer Website sind Plugins des Videoportals Vimeo der Vimeo, LLC, 555 West 18th Street, New York, New York 10011, USA eingebunden. Wenn Sie eine Seite unseres Webauftritts aufrufen, die ein solches Plugin enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern von Vimeo her. Der Inhalt des Plugins wird von Vimeo direkt an Ihren Browser übermittelt und in die Seite eingebunden. Durch diese Einbindung erhält Vimeo die Information, dass Ihr Browser die entsprechende Seite unseres Webauftritts aufgerufen hat, auch wenn Sie keinen Vimeo-Account besitzen oder gerade nicht bei Vimeo eingeloggt sind. Diese Information (einschließlich Ihrer IP-Adresse) wird von Ihrem Browser direkt an einen Server von Vimeo in die USA übermittelt und dort gespeichert.
          Sind Sie bei Vimeo eingeloggt, kann Vimeo den Besuch unserer Website Ihrem Vimeo-Account unmittelbar zuordnen. Wenn Sie mit den Plugins interagieren (wie z.B. Betätigung des Start-Buttons eines Videos), wird diese Information ebenfalls direkt an einen Server von Vimeo übermittelt und dort gespeichert.
          Wenn Sie nicht möchten, dass Vimeo die über unseren Webauftritt gesammelten Daten unmittelbar Ihrem Vimeo-Account zuordnet, müssen Sie sich vor Ihrem Besuch unserer Website bei Vimeo ausloggen.
          Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Vimeo sowie Ihre diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre entnehmen Sie bitte den Datenschutzhinweisen von Vimeo: https://vimeo.com/privacy
          Bei Videos von Vimeo, die auf unserer Seite eingebunden sind, ist das Trackingtool Google Analytics der Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland, automatisch integriert. Dabei handelt es sich um ein eigenes Tracking von Vimeo, auf das wir keinen Zugriff haben und welches von unserer Seite nicht beeinflusst werden kann. Google Analytics verwendet für das Tracking sog. „Cookies“, dies sind Textdateien, die auf Ihrem Computer gespeichert werden und eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google übertragen und dort gespeichert, hierbei kann es auch zu einer Übermittlung an die Server der Google LLC. in den USA kommen.
          Alle oben beschriebenen Verarbeitungen, insbesondere das Auslesen von Informationen auf dem verwendeten Endgerät über das Tracking-Pixel, werden nur dann vollzogen, wenn Sie uns gemäß Art. 6 Abs. 1 lit. a DSGVO dazu Ihre ausdrückliche Einwilligung erteilt haben. Ohne diese Einwilligungserteilung unterbleibt der Einsatz von Vimeo-Videos während Ihres Seitenbesuchs.
          Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Um Ihren Widerruf auszuüben, deaktivieren Sie diesen Dienst bitte in dem auf der Webseite bereitgestellten „Cookie-Consent-Tool“ über alternative, Ihnen auf der Website mitgeteilte Möglichkeiten.
          <br></br>
          <br></br>
          9.6 Google Translate
          Diese Seite nutzt über eine API-Einbindung den Übersetzungsdienst "Google Translate" der Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland („Google“). Damit die Übersetzung nach Ihrer Wahl einer Landessprache automatisiert angezeigt wird, nimmt der von Ihnen verwendete Browser Verbindung zu den Servern von Google auf. Google verwendet hierbei sog. "Cookies", das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse Ihrer Nutzung der Website ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich der gekürzten IP-Adresse) werden in der Regel an einen Server von Google übertragen und dort gespeichert, hierbei kann es auch zu einer Übermittlung an die Server der Google LLC. in den USA kommen.
          Weite Informationen zu Google Translate sowie die Datenschutzerklärung von Google können Sie einsehen unter: https://www.google.com/policies/privacy/
          Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Um Ihren Widerruf auszuüben, deaktivieren Sie diesen Dienst im auf der Webseite bereitgestellten "Cookie-Consent-Tool".
          <br></br>
          <br></br>
          9.7 Google Kundenrezensionen (ehemals Google Zertifizierter-Händler-Programm)
          Wir arbeiten mit Google im Rahmen des Programms „Google Kundenrezensionen“ zusammen. Der Anbieter ist Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland (“Google”). Dieses Programm gibt uns die Möglichkeit, Kundenrezensionen von Nutzern unserer Website einzuholen. Hierbei werden Sie nach einem Einkauf auf unserer Website gefragt, ob Sie an einer E-Mail-Umfrage von Google teilnehmen möchten. Wenn Sie Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO erteilen, übermitteln wir Ihre E-Mail-Adresse an Google. Sie erhalten eine E-Mail von Google Kundenrezensionen, in der Sie gebeten werden, die Kauferfahrung auf unserer Website zu bewerten. Die von Ihnen abgegebene Bewertung wird anschließend mit unseren anderen Bewertungen zusammengefasst und in unserem Logo Google Kundenrezensionen sowie in unserem Merchant Center-Dashboard angezeigt. Außerdem wird Ihre Bewertung für Google Verkäuferbewertungen genutzt. Im Rahmen der Nutzung von Google Kundenrezensionen kann es auch zu einer Übermittlung von personenbezogenen Daten an die Server der Google LLC. in den USA kommen.
          Sie können Ihre Einwilligung jederzeit durch eine Nachricht an den für die Datenverarbeitung Verantwortlichen oder gegenüber Google widerrufen.
          Weitere Informationen zum Datenschutz von Google im Zumsammenhang mit dem Programm Google Kundenrezensionen können Sie unter nachstehendem Link abrufen: https://support.google.com/merchants/answer/7188525?hl=de
          Weitere Informationen zum Datenschutz von Google Verkäuferbewertungen können Sie unter diesem Link nachlesen: https://support.google.com/google-ads/answer/2375474
          <br></br>
          <br></br>
          10) Tools und Sonstiges
          <br></br>
          <br></br>
          10.1 - Google Maps
          Auf unserer Website verwenden wir Google Maps (API) von Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland (“Google”). Google Maps ist ein Webdienst zur Darstellung von interaktiven (Land-)Karten, um geographische Informationen visuell darzustellen. Über die Nutzung dieses Dienstes wird Ihnen unser Standort angezeigt und eine etwaige Anfahrt erleichtert.
          Bereits beim Aufrufen derjenigen Unterseiten, in die die Karte von Google Maps eingebunden ist, werden Informationen über Ihre Nutzung unserer Website (wie z.B. Ihre IP-Adresse) an Server von Google übertragen und dort gespeichert, hierbei kann es auch zu einer Übermittlung an die Server der Google LLC. in den USA kommen. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind oder ob ein Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet. Wenn Sie die Zuordnung mit Ihrem Profil bei Google nicht wünschen, müssen Sie sich vor Aktivierung des Buttons ausloggen. Google speichert Ihre Daten (selbst für nicht eingeloggte Nutzer) als Nutzungsprofile und wertet diese aus. Die Erhebung, Speicherung und die Auswertung erfolgen gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis des berechtigten Interesses von Google an der Einblendung personalisierter Werbung, Marktforschung und/oder der bedarfsgerechten Gestaltung von Google-Websites. Ihnen steht ein Widerspruchsrecht gegen die Bildung dieser Nutzerprofile zu, wobei Sie sich für dessen Ausübung an Google wenden müssen. Wenn Sie mit der künftigen Übermittlung Ihrer Daten an Google im Rahmen der Nutzung von Google Maps nicht einverstanden sind, besteht auch die Möglichkeit, den Webdienst von Google Maps vollständig zu deaktivieren, indem Sie die Anwendung JavaScript in Ihrem Browser ausschalten. Google Maps und damit auch die Kartenanzeige auf dieser Internetseite kann dann nicht genutzt werden.
          Die Nutzungsbedingungen von Google können Sie unter https://www.google.de/intl/de/policies/terms/regional.html einsehen, die zusätzlichen Nutzungsbedingungen für Google Maps finden Sie unter https://www.google.com/intl/de_US/help/terms_maps.html
          Ausführliche Informationen zum Datenschutz im Zusammenhang mit der Verwendung von Google Maps finden Sie auf der Internetseite von Google („Google Privacy Policy“): https://www.google.de/intl/de/policies/privacy/
          Soweit rechtlich erforderlich, haben wir zur vorstehend dargestellten Verarbeitung Ihrer Daten Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO eingeholt. Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Um Ihren Widerruf auszuüben, befolgen Sie bitte die vorstehend geschilderte Möglichkeit zur Vornahme eines Widerspruchs.
          <br></br>
          <br></br>
          11) Rechte des Betroffenen
          <br></br>
          <br></br>
          11.1 Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten die nachstehenden Betroffenenrechte (Auskunfts- und Interventionsrechte), wobei für die jeweiligen Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage verwiesen wird:
          - Auskunftsrecht gemäß Art. 15 DSGVO;
          - Recht auf Berichtigung gemäß Art. 16 DSGVO;
          - Recht auf Löschung gemäß Art. 17 DSGVO;
          - Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;
          - Recht auf Unterrichtung gemäß Art. 19 DSGVO;
          - Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO;
          - Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO;
          - Recht auf Beschwerde gemäß Art. 77 DSGVO.
          <br></br>
          <br></br>
          11.2 WIDERSPRUCHSRECHT
          WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE PERSONENBEZOGENEN DATEN AUFGRUND UNSERES ÜBERWIEGENDEN BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.
          MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN KÖNNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND GRUNDFREIHEITEN ÜBERWIEGEN, ODER WENN DIE VERARBEITUNG DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN DIENT.
          WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE KÖNNEN DEN WIDERSPRUCH WIE OBEN BESCHRIEBEN AUSÜBEN.
          MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.
          <br></br>
          <br></br>
          12) Dauer der Speicherung personenbezogener Daten
          Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).
          Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden diese Daten so lange gespeichert, bis der Betroffene seine Einwilligung widerruft.
          Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.
          Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis der Betroffene sein Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausübt, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
          Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis der Betroffene sein Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO ausübt.
          Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene Daten im Übrigen dann gelöscht, wenn sie für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.
        </div>
         <Footer/>
      </div>
    )
  }
}