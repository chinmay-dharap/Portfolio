/*
 * Blog posts live in this file so the site can run on GitHub Pages with no
 * database, build step, or server. Newest posts should be first.
 *
 * `content` accepts author-written HTML. Keep it to semantic elements such as
 * <p>, <h2>, <ul>, <pre><code>, and <a>.
 */
window.BLOG_POSTS = [
  {
  slug: "welcome",
  title: "Welcome to my blog",
  date: "2025-09-16",
  excerpt: "A random thought turned into a blog — a place to document the journey, the struggles, and everything that happens along the way.",
  tags: ["First Post"],
  content: `
    <p>So I finally decided and acted on a random thought of starting to write my own blog.</p>
    <p>Let's see how it goes! ☕</p>

    <h2>Why I started this blog?</h2>

    <p>Because of this quote I read somewhere:</p>

    <blockquote>
      <p>“If you are going through hell, keep going.”</p>
      <footer>— Winston Churchill</footer>
    </blockquote>

    <p>I am going through kinda like a hell right now. But I strongly believe that time changes everything.</p>

    <p>So, it would be really fun to document all this here, so that I can look back one day when I become the best cybersecurity researcher on the planet and tell myself:</p>

    <p><strong>Everything worked out perfectly! ☕</strong></p>
  `
}, 
{
  slug: "talk-on-cybersecurity-career-roadmap-at-apsit",
  title: "Talk on Cybersecurity Career Roadmap at APSIT",
  date: "2025-09-16",
  excerpt: "A reflection on returning to my alma mater to speak with engineering students about pursuing a career in cybersecurity.",
  tags: ["Talk", "Career"],
  content: `
    <p>I am about to give a small talk tomorrow (Sep 16th, 2025) on <em>“Roadmap to pursue a career in Cybersecurity”</em> 👨🏻‍💻🛡️</p>

    <p>When I moved back to India, the HOD of the IT department at A. P. Shah Institute of Technology (my alma mater) asked me if I could give a talk to Second Year and Third Year Engineering Students. Why would I say no?</p>

    <p>The best way to become a master in something is to teach others about it. I also get an opportunity to go back to my college as an Alumni and a mentor. It’s cool! 😎</p>

    <p>So I decided I would give a nice and concise 45-minute talk on <em>“How to pursue a Career in Cybersecurity.”</em></p>

    <p>It is a little funny if I think about it. I’m not an industry expert to tell others how they should pursue a career, because I don’t have a full-time job yet. But I do have a Master’s Degree in Cybersecurity from Stevens. So I won’t call myself an industry expert, but rather an <strong>Emerging Expert</strong>.</p>

    <h2>More Than Just a Talk</h2>

    <p>But I am not just going to give a talk. I’m more interested in finding out what other activities students have been involved in that are directly related to cybersecurity.</p>

    <p>It’s been a long time since I graduated from APSIT. I have been following their LinkedIn and Instagram pages for the last three years, and I have to say, I see a chain reaction. More and more students are interested in this domain.</p>

    <p>They don’t just want to get certifications but postgraduate degrees too. They are indeed taking it seriously.</p>

    <h2>Things Have Changed</h2>

    <p>What’s interesting about this is that it started after I graduated from APSIT.</p>

    <p>Back then, there were very few people (probably only me from my batch) who were excited about being security specialists. Most of them were interested in Development and other things.</p>

    <p>But now it’s different.</p>

    <p>There is a <strong>Cybersecurity Club</strong> in my college! I don’t know what they do apart from taking workshops, but I so wish that it should have been there when I was a student.</p>

    <p>And I have way too many suggestions for them xD.</p>
  `
},
{
  slug: "libresoc-building-a-functional-security-operations-center-soc-using-only-open-source-tools-part-1",
  title: "LibreSOC: Building a Functional Security Operations Center (SOC) using only Open-Source Tools — Part 1",
  date: "2025-09-23",
  excerpt: "Part 1 of a multi-part series on building a fully functional Security Operations Center using open-source tools, including Wazuh, DFIR-IRIS, OPNsense, virtual machines, and Docker.",
  tags: ["SOC Lab", "LibreSOC", "Open Source", "Wazuh", "DFIR-IRIS", "OPNsense"],
  content: `
    <blockquote>
      <p>Hi there! In this multi-blog series, you will learn how to build a fully functioning and usable SOC using all open-source tools.</p>

      <p>I started working on this project because I wanted to learn SIEM. But how can anyone learn a SIEM tool without getting logs from endpoints and simulating different types of attacks on those endpoints to analyze attack scenarios?</p>

      <p>So I decided not to just learn a single SIEM but to build a whole SOC environment which would have a SIEM, EDR, XDR, Endpoints, Firewall, Case Management Solution, Threat Intelligence Platform and finally an Attacker Machine.</p>
    </blockquote>

    <h2>Gathering the Tools</h2>

    <p>In this part, we will gather all the ISOs and Docker Containers for Client VMs, SIEM Tool, IR/Case Management Tool, and Firewall. Below are the web links that you can use. Download everything and get ready to start setting up the Lab.</p>

    <h3>Agents / Client Machines</h3>

    <ol>
      <li>
        <strong>Windows 10 Pro ISO:</strong>
        <a href="https://www.microsoft.com/en-in/software-download/windows10ISO" target="_blank" rel="noopener noreferrer">Microsoft Windows 10 Download</a>
      </li>
      <li>
        <strong>Ubuntu Desktop:</strong>
        <a href="https://ubuntu.com/download/desktop" target="_blank" rel="noopener noreferrer">Ubuntu Desktop Download</a>
      </li>
    </ol>

    <h3>Firewall</h3>

    <ol>
      <li>
        <strong>OPNsense Firewall:</strong>
        <a href="https://opnsense.org/download/" target="_blank" rel="noopener noreferrer">OPNsense Download</a>
      </li>
    </ol>

    <h3>SIEM</h3>

    <ol>
      <li>
        <strong>Wazuh Docker Deployment:</strong>
        <a href="https://documentation.wazuh.com/current/deployment-options/docker/wazuh-container.html#deployment-options" target="_blank" rel="noopener noreferrer">Wazuh Docker Documentation</a>
      </li>
    </ol>

    <h3>Incident Response and Case Management Platform</h3>

    <ol>
      <li>
        <strong>DFIR-IRIS Docker Deployment:</strong>
        <a href="https://docs.dfir-iris.org/latest/getting_started/" target="_blank" rel="noopener noreferrer">DFIR-IRIS Getting Started Guide</a>
      </li>
    </ol>

    <h2>Setting Up a Lab</h2>

    <p>In order to build a SOC, we will need an environment where we can configure and play with different tools. It's better to keep something like this isolated on Virtual Machines or Docker Containers so that they won't mess with our primary host.</p>

    <p>To create a lab for this purpose, I would suggest investing in a powerful workstation (only if it is easily possible. I know it's expensive).</p>

    <p>As I can't afford to build a workstation now, I am using my primary laptop. On it, I am using VirtualBox for all the virtual machines we need (for endpoints and firewalls), and I will be running Docker containers for SIEM and other tools on my host system.</p>

    <p>I know what I said earlier about keeping everything isolated from our host. But I simply don't have enough RAM to fire up more than 5 Virtual Machines in VirtualBox at the same time.</p>

    <h3>My System Specifications (Minimum Requirements)</h3>

    <ol>
      <li><strong>RAM:</strong> 16 GB DDR5 4800 MHz</li>
      <li><strong>Storage:</strong> 512 GB</li>
      <li><strong>CPU:</strong> 12th Gen Intel(R) Core(TM) i7-12700H (20) @ 4.7 GHz</li>
      <li><strong>GPU:</strong> GeForce RTX 3050 Ti Mobile</li>
      <li><strong>Host OS:</strong> Garuda Linux (Arch Based)</li>
      <li><strong>Virtualization Software:</strong> VirtualBox</li>
    </ol>

    <h2>Virtual Machines We Need</h2>

    <ol>
      <li>
        First, create 2 VMs: a Windows 10 Pro VM and an Ubuntu Desktop VM. Both these VMs will require at least <strong>2 GB RAM</strong> and <strong>25 GB disk space</strong> each to work properly.
      </li>

      <li>
        Now, create 2 more VMs for a Master Firewall and a Backup Firewall. These will work using the <strong>pfsync protocol</strong> to create a High Availability setup. We will set that up in the next parts. Install OPNsense Firewalls in them.
      </li>
    </ol>

    <h2>Network Setup</h2>

    <blockquote>
      <p><strong>⚠️ This is the confusing part. I suggest you read every word carefully and don't rush!</strong></p>
    </blockquote>

    <h3>VirtualBox Network Settings</h3>

    <ol>
      <li>First, open VirtualBox and go to its Network Settings.</li>

      <li>
        Under <strong>Host-only Networks</strong>, if there is not a default network created by VirtualBox, create one!
      </li>

      <li>
        If a network exists, check its IP settings. There must be a DHCP Server enabled which will automatically assign IP addresses to VMs.
        <p>For example:</p>
        <ul>
          <li>Network Gateway: <code>192.168.56.0</code></li>
          <li>DHCP Server Address: <code>192.168.0.100</code></li>
        </ul>
      </li>
    </ol>

    <h3>Windows 10 Pro and Ubuntu Client Machines</h3>

    <p>Go to VM Settings and then Network Settings. Under <strong>Adapter 1</strong>, click on <strong>Enable Network Adapter</strong>.</p>

    <p>For the <strong>Attached to</strong> drop-down menu, select <strong>Host-Only Adapter</strong>.</p>

    <p>The reason why I am using a single adapter with Host-Only Adapter settings here is because I will be using my host machine for the SIEM and Incident Response/Case Management tools. So, these VMs should be able to talk to my host machine and send log data to it.</p>

    <p>If you want to check if the VirtualBox configuration is right or not, check the screenshots below to verify if you have set it up correctly.</p>

    <p><em>Windows 10 VM configuration screenshot</em></p>
    <p><em>Ubuntu VM configuration screenshot</em></p>

    <h3>Wazuh and DFIR-IRIS</h3>

    <p>To install Wazuh and DFIR-IRIS as Docker Single Compose Stacks, simply follow their official documentation which I have given above in the web links. It is really easy!</p>

    <p>There will be no network setup needed as we will be using our Host Machine for both these services.</p>

    <p>Only DFIR-IRIS will require a different port to run on for its web interface. It will probably spit out an error while firing up the Docker containers that the default <code>443</code> port is being used by a different service, which makes sense because Wazuh Dashboard uses 443 by default.</p>

    <h4>Changing the Default DFIR-IRIS Port</h4>

    <ol>
      <li>Go to the DFIR-IRIS directory and edit the <code>docker-compose.base.yml</code> file.</li>
      <li>Find the <code>ports</code> section.</li>
      <li>Remove the default line and instead write:</li>
    </ol>

    <pre><code>ports:
  - 8443:443</code></pre>

    <p>This will map port <code>8443</code> to <code>443</code>. Then save the file and restart the Docker containers.</p>

    <p>Now IRIS should work fine on port <code>8443</code>.</p>

    <h3>OPNsense Firewalls Network Adapter Settings</h3>

    <p>Now, both the Master and Backup Firewalls will require <strong>3 Network Adapters</strong>.</p>

    <ol>
      <li>
        <strong>Adapter 1: NAT Mode</strong> — This adapter is for WAN, so that our Client VMs can connect to the network through the Firewall.
      </li>

      <li>
        <strong>Adapter 2: Host-Only Adapter</strong> — This is for LAN. We will give a static IP to the firewall where we can also handle firewall settings using its web interface.
      </li>

      <li>
        <strong>Adapter 3: Internal Network</strong> — This is for the High Availability setup, basically to sync with the other firewall.
      </li>
    </ol>

    <p>This is how the VirtualBox settings page looks like for both Firewalls.</p>

    <p><em>Master Firewall VirtualBox configuration screenshot</em></p>
    <p><em>Backup Firewall VirtualBox configuration screenshot</em></p>

    <h2>That's It for Part 1!</h2>

    <p>That’s it for this part! ☕</p>

    <p>In the next part we will go over:</p>

    <ul>
      <li>Firewall Setup and Custom Rules</li>
      <li>Network Connectivity Test</li>
      <li>Wazuh Agent Installation &amp; Integration with Wazuh Server</li>
      <li>MISP Setup — our Threat Intelligence Platform</li>
    </ul>

    <p>Till then, Cheers! ☕</p>
  `
}
];
