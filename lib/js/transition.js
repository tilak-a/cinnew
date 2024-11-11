let currentSection = 0;
const sections = document.querySelectorAll(".section");
const globe1 = document.getElementById("glob1");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");
// const section2 = document.getElementById('section2');
const video1 = document.getElementById("video-1");
const video2 = document.getElementById("video-2");
const video3 = document.getElementById("video-3");
const content = document.getElementById("section4-content");
const text2 = document.getElementById("sect2-text");

const vid_motion = document.getElementById("vid");
$(document).ready(function() {
  $("body").bind("wheel", function(e) {
    var counter = parseInt($("#hiddenInput").val());
    var counter_circle = parseInt($("#hiddenInputCircle").val());

    if (e.originalEvent.wheelDelta / 120 > 0) {
      if (counter == -1) {
        counter1 = counter + 1;
        counter_circle_1 = counter_circle + 1;
        $("section.section3").hide();
        $("section.section1").show("slow");
        $("section.section2").hide("slow");
        $("video.myvideo2").animate(
          { left: "0px", top: "585px", width: "32%" },
          {
            duration: 1000,
            queue: false,
            specialEasing: {
              width: "linear",
              height: "easeOutBounce",
            },
          }
        );

        // setTimeout(function() {
        //   updateCounter(counter1);
        // }, 1000);
      } else if (counter == -2) {
        counter1 = counter + 1;
        counter_circle_1 = counter_circle + 1;
        $("div.sec-3").hide();
        $("div.sec-1").hide("slow");
        $("div.sec-2").show("slow");
        $("video.myvideo2").animate(
          { left: "650px", top: "245px", width: "32%" },
          {
            duration: 1000,
            queue: false,
            specialEasing: {
              width: "linear",
              height: "easeOutBounce",
            },
          }
        );
        // setTimeout(function() {
        //   updateCounter(counter1);
        // }, 1000);
      }
    } else {
      counter1 = counter - 1;

      if (counter1 == -1) {
        $("div.sec-3").hide();
        $("div.sec-1").hide("slow");
        $("div.sec-2").show("slow");
        $("div.h1").delay(400).show("slide", { direction: "right" }, 1000);
        $("div.h3").delay(400).show("slide", { direction: "right" }, 1000);
        $("video.myvideo2").animate(
          { left: "650px", top: "245px", width: "32%" },
          {
            duration: 1000,
            queue: false,
            specialEasing: {
              width: "linear",
              height: "easeOutBounce",
            },
          }
        );

        // setTimeout(function() {
        //   updateCounter(counter1);
        // }, 1000);

        return;
      } else if (counter1 == -2) {
        $("#hiddenInput").val(counter1);
        counter1 = parseInt(counter1);

        $("div.sec-2").hide("slow");
        $("div.sec-3").show("slow");
        $("video.myvideo2").animate(
          { left: "0px", top: "472px", width: "340px" },
          {
            duration: 1000,
            queue: false,
            specialEasing: {
              width: "linear",
              height: "easeOutBounce",
            },
          }
        );
      } else {
        if ($("div.sec-3").is(":visible")) {
          counter_circle_1 = $("#hiddenInputCircle").val();
          counter_circle_1 = parseInt(counter_circle_1) - 1;
          // setTimeout(function() {
          //   updateCounterCircle(counter_circle_1);
          // }, 500);

          if (counter_circle_1 == 0) {
            $("li.limenu.Venus a").css("font-weight", "500");
            $("li.limenu.Earth a").css("font-weight", "500");
            $("li.limenu.Mars a").css("font-weight", "500");
            $("li.limenu.Jupiter a").css("font-weight", "500");
            $("li.limenu.Saturn a").css("font-weight", "500");
            $("li.limenu.Uranus a").css("font-weight", "500");
            $("li.limenu.Neptune a").css("font-weight", "500");

            $("li.limenu.Mercury a").css("font-weight", "500");
            $(".text1").text("Sun").fadeIn("slow");
            $(".text2").text("Sun Description").fadeIn("slow");
            if (supportsHEVCAlpha()) {
              $("video.myvideo2").attr("src", "sunoutputnew.mov").animate(
                { left: "0px", top: "423px", width: "54%", display: "block" },
                {
                  duration: 1000,
                  queue: false,
                  specialEasing: {
                    width: "linear",
                    height: "easeOutBounce",
                  },
                }
              );
            } else {
              $("video.myvideo2").attr("src", "images/Sun.webm").animate(
                { left: "0px", top: "423px", width: "54%", display: "block" },
                {
                  duration: 1000,
                  queue: false,
                  specialEasing: {
                    width: "linear",
                    height: "easeOutBounce",
                  },
                }
              );
            }
          } else if (counter_circle_1 == -1) {
            $("li.limenu.Venus").css("font-weight", "500");
            $("li.limenu.Earth").css("font-weight", "500");
            $("li.limenu.Mars").css("font-weight", "500");
            $("li.limenu.Jupiter").css("font-weight", "500");
            $("li.limenu.Saturn").css("font-weight", "500");
            $("li.limenu.Uranus").css("font-weight", "500");
            $("li.limenu.Neptune").css("font-weight", "500");

            $("li.limenu.Mercury a").css("font-weight", "900");
            $(".text1")
              .text("Guaranteed Revenue or your Money Back")
              .fadeIn("slow");
            $(".text2")
              .text(
                "Tired of getting everything except revenue? Most vendors who give you reach, engagement, promises, likes and efforts but no revenue but we stand behind our services and guarantee realistic revenue or your money back."
              )
              .fadeIn("slow");
            if (supportsHEVCAlpha()) {
              $("video.myvideo2")
                .attr("src", "images/mercuryoutputnew.mov")
                .animate(
                  {
                    left: "0px",
                    top: "472px",
                    width: "340px",
                    display: "block",
                  },
                  {
                    duration: 1000,
                    queue: false,
                    specialEasing: {
                      width: "linear",
                      height: "easeOutBounce",
                    },
                  }
                );
            } else {
              $("video.myvideo2").attr("src", "images/Mercury.webm").animate(
                { left: "0px", top: "472px", width: "340px", display: "block" },
                {
                  duration: 1000,
                  queue: false,
                  specialEasing: {
                    width: "linear",
                    height: "easeOutBounce",
                  },
                }
              );
            }
          } else if (counter_circle_1 == -2) {
            $("li.limenu.Mercury a").css("font-weight", "500");
            $("li.limenu.Earth a").css("font-weight", "500");
            $("li.limenu.Mars a").css("font-weight", "500");
            $("li.limenu.Jupiter a").css("font-weight", "500");
            $("li.limenu.Saturn a").css("font-weight", "500");
            $("li.limenu.Uranus a").css("font-weight", "500");
            $("li.limenu.Neptune a").css("font-weight", "500");

            $("li.limenu.Venus a").css("font-weight", "900");

            $(".text1").text("24/7 Customer Care").fadeIn("slow");
            $(".text2")
              .text(
                "Are you an early morning bird or late night owl? At CIN, we are available, 24 hours a day, 7 days a week and 365 days a year. We understand that business never stops and creative ideas and calamities can happen anytime."
              )
              .fadeIn("slow");

            if (supportsHEVCAlpha()) {
              $("video.myvideo2")
                .attr("src", "images/venusoutputnew.mov")
                .animate(
                  {
                    left: "0px",
                    top: "472px",
                    width: "340px",
                    display: "block",
                  },
                  {
                    duration: 1000,
                    queue: false,
                    specialEasing: {
                      width: "linear",
                      height: "easeOutBounce",
                    },
                  }
                );
            } else {
              $("video.myvideo2").attr("src", "images/Venus.webm").animate(
                { left: "0px", top: "472px", width: "340px", display: "block" },
                {
                  duration: 1000,
                  queue: false,
                  specialEasing: {
                    width: "linear",
                    height: "easeOutBounce",
                  },
                }
              );
            }
          } else if (counter_circle_1 == -3) {
            $("li.limenu.Mercury a").css("font-weight", "500");
            $("li.limenu.Venus a").css("font-weight", "500");
            $("li.limenu.Mars a").css("font-weight", "500");
            $("li.limenu.Jupiter a").css("font-weight", "500");
            $("li.limenu.Saturn a").css("font-weight", "500");
            $("li.limenu.Uranus a").css("font-weight", "500");
            $("li.limenu.Neptune a").css("font-weight", "500");

            $("li.limenu.Earth a").css("font-weight", "900");

            $(".text1").text("Responsive Relationship Manager").fadeIn("slow");
            $(".text2")
              .text(
                "Are you trying to reach your client manager for decades but not getting a proper response? No worries, CIN has heard your prayers. As a CIN client, you will be assigned a responsive “Super Man (ager)” who will reach out to you faster than Superman."
              )
              .fadeIn("slow");

            if (supportsHEVCAlpha()) {
              $("video.myvideo2")
                .attr("src", "images/earthouputnew.mov")
                .animate(
                  {
                    left: "0px",
                    top: "472px",
                    width: "340px",
                    display: "block",
                  },
                  {
                    duration: 1000,
                    queue: false,
                    specialEasing: {
                      width: "linear",
                      height: "easeOutBounce",
                    },
                  }
                );
            } else {
              $("video.myvideo2").attr("src", "images/Earth.webm").animate(
                { left: "0px", top: "472px", width: "340px", display: "block" },
                {
                  duration: 1000,
                  queue: false,
                  specialEasing: {
                    width: "linear",
                    height: "easeOutBounce",
                  },
                }
              );
            }
          } else if (counter_circle_1 == -4) {
            $("li.limenu.Mercury a").css("font-weight", "500");
            $("li.limenu.Venus a").css("font-weight", "500");
            $("li.limenu.Earth a").css("font-weight", "500");
            $("li.limenu.Jupiter a").css("font-weight", "500");
            $("li.limenu.Saturn a").css("font-weight", "500");
            $("li.limenu.Uranus a").css("font-weight", "500");
            $("li.limenu.Neptune a").css("font-weight", "500");

            $("li.limenu.Mars a").css("font-weight", "900");

            $(".text1").text("Data Driven Decision Making").fadeIn("slow");
            $(".text2")
              .text(
                "Are you following superstition to predict rain? Superstition will give you only assumptions while weather forecasts will give you accurate updates based on data analysis. Similarly, CIN will follow your data instead of assumptions."
              )
              .fadeIn("slow");

            if (supportsHEVCAlpha()) {
              $("video.myvideo2")
                .attr("src", "images/marsoutputnew.mov")
                .animate(
                  {
                    left: "0px",
                    top: "472px",
                    width: "340px",
                    display: "block",
                  },
                  {
                    duration: 1000,
                    queue: false,
                    specialEasing: {
                      width: "linear",
                      height: "easeOutBounce",
                    },
                  }
                );
            } else {
              $("video.myvideo2").attr("src", "images/Mars.webm").animate(
                { left: "0px", top: "472px", width: "340px", display: "block" },
                {
                  duration: 1000,
                  queue: false,
                  specialEasing: {
                    width: "linear",
                    height: "easeOutBounce",
                  },
                }
              );
            }
          } else if (counter_circle_1 == -5) {
            $("li.limenu.Mercury a").css("font-weight", "500");
            $("li.limenu.Venus a").css("font-weight", "500");
            $("li.limenu.Earth a").css("font-weight", "500");
            $("li.limenu.Mars a").css("font-weight", "500");
            $("li.limenu.Saturn a").css("font-weight", "500");
            $("li.limenu.Uranus a").css("font-weight", "500");
            $("li.limenu.Neptune a").css("font-weight", "500");

            $("li.limenu.Jupiter a").css("font-weight", "900");

            $(".text1").text("One Stop Shop").fadeIn("slow");
            $(".text2")
              .text(
                "Have you become a common man in a government office where your file is being shifted from desk to desk? At CIN, we offer a complete range of services to ensure that you don’t have to find different vendors for different services."
              )
              .fadeIn("slow");
            if (supportsHEVCAlpha()) {
              $("video.myvideo2")
                .attr("src", "images/jupiteroutputnew.mov")
                .animate(
                  {
                    left: "0px",
                    top: "472px",
                    width: "340px",
                    display: "block",
                  },
                  {
                    duration: 1000,
                    queue: false,
                    specialEasing: {
                      width: "linear",
                      height: "easeOutBounce",
                    },
                  }
                );
            } else {
              $("video.myvideo2").attr("src", "images/Jupiter.webm").animate(
                { left: "0px", top: "472px", width: "340px", display: "block" },
                {
                  duration: 1000,
                  queue: false,
                  specialEasing: {
                    width: "linear",
                    height: "easeOutBounce",
                  },
                }
              );
            }
          } else if (counter_circle_1 == -6) {
            $("li.limenu.Mercury a").css("font-weight", "500");
            $("li.limenu.Venus a").css("font-weight", "500");
            $("li.limenu.Earth a").css("font-weight", "500");
            $("li.limenu.Mars a").css("font-weight", "500");
            $("li.limenu.Jupiter a").css("font-weight", "500");
            $("li.limenu.Uranus a").css("font-weight", "500");
            $("li.limenu.Saturn a").css("font-weight", "500");

            $("li.limenu.Saturn a").css("font-weight", "900");
            $(".text1").text("Experienced Team").fadeIn("slow");
            $(".text2")
              .text(
                "Are you expecting fine cuisine but getting dhaba food instead? Experience matters. This is why at CIN, we only hire professionals with at least 5 years of industry experience. This guarantees a mature, knowledgeable and error-free handling of your account so you get a BMW while expecting an Ambassador."
              )
              .fadeIn("slow");
            if (supportsHEVCAlpha()) {
              $("video.myvideo2")
                .attr("src", "images/saturnoutputnew.mov")
                .animate(
                  {
                    left: "13px",
                    top: "306px",
                    width: "690px",
                    display: "block",
                  },
                  {
                    duration: 1000,
                    queue: false,
                    specialEasing: {
                      width: "linear",
                      height: "easeOutBounce",
                    },
                  }
                );
            } else {
              $("video.myvideo2").attr("src", "images/Saturn.webm").animate(
                {
                  left: "13px",
                  top: "306px",
                  width: "690px",
                  display: "block",
                },
                {
                  duration: 1000,
                  queue: false,
                  specialEasing: {
                    width: "linear",
                    height: "easeOutBounce",
                  },
                }
              );
            }
          } else if (counter_circle_1 == -7) {
            $("li.limenu.Mercury a").css("font-weight", "500");
            $("li.limenu.Venus a").css("font-weight", "500");
            $("li.limenu.Earth a").css("font-weight", "500");
            $("li.limenu.Mars a").css("font-weight", "500");
            $("li.limenu.Jupiter a").css("font-weight", "500");
            $("li.limenu.Saturn a").css("font-weight", "500");
            $("li.limenu.Neptune a").css("font-weight", "500");

            $("li.limenu.Uranus a").css("font-weight", "900");

            $(".text1").text("Data Security").fadeIn("slow");
            $(".text2")
              .text(
                "Are you sure your comp is not using your data? Most companies leak data like a cheap Chinese Tire tube. At CIN, we will ensure your data is safer than a bank safe so your competition can never take advantage of you."
              )
              .fadeIn("slow");

            if (supportsHEVCAlpha()) {
              $("video.myvideo2")
                .attr("src", "images/uranusoutputnew.mov")
                .animate(
                  {
                    left: "0px",
                    top: "472px",
                    width: "340px",
                    display: "block",
                  },
                  {
                    duration: 1000,
                    queue: false,
                    specialEasing: {
                      width: "linear",
                      height: "easeOutBounce",
                    },
                  }
                );
            } else {
              $("video.myvideo2").attr("src", "images/Uranus.webm").animate(
                { left: "0px", top: "472px", width: "340px", display: "block" },
                {
                  duration: 1000,
                  queue: false,
                  specialEasing: {
                    width: "linear",
                    height: "easeOutBounce",
                  },
                }
              );
            }
          } else if (counter_circle_1 == -8) {
            $("li.limenu.Mercury a").css("font-weight", "500");
            $("li.limenu.Venus a").css("font-weight", "500");
            $("li.limenu.Earth a").css("font-weight", "500");
            $("li.limenu.Mars a").css("font-weight", "500");
            $("li.limenu.Jupiter a").css("font-weight", "500");
            $("li.limenu.Saturn a").css("font-weight", "500");
            $("li.limenu.Uranus a").css("font-weight", "500");

            $("li.limenu.Neptune a").css("font-weight", "900");
            $(".text1").text("Timely delivery").fadeIn("slow");
            $(".text2")
              .text(
                "What is the use of medicine after the patient is dead? At CIN, we understand the concept of urgency and the importance of timely delivery. Therefore we meet and beat every deadline so that your business runs like clockwork."
              )
              .fadeIn();
            if (supportsHEVCAlpha()) {
              $("video.myvideo2")
                .attr("src", "images/neptuneoutputnew.mov")
                .animate(
                  {
                    left: "0px",
                    top: "472px",
                    width: "340px",
                    display: "block",
                  },
                  {
                    duration: 1000,
                    queue: false,
                    specialEasing: {
                      width: "linear",
                      height: "easeOutBounce",
                    },
                  }
                );
            } else {
              $("video.myvideo2").attr("src", "images/Neptune.webm").animate(
                { left: "0px", top: "472px", width: "340px", display: "block" },
                {
                  duration: 1000,
                  queue: false,
                  specialEasing: {
                    width: "linear",
                    height: "easeOutBounce",
                  },
                }
              );
            }
          } else {
            $("#hiddenInputCircle").val(-7);
          }
        }
      }
    }
  });
});

// Function to detect the current section based on scroll position
let csection = 0;
function detectCurrentSection() {
  let currentSectionIndex = 0;

  // Loop through all sections to find the current section based on scroll position
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop; // Distance from the top of the page
    const sectionHeight = section.offsetHeight; // Height of the section
    const scrollPosition = window.scrollY; // Current scroll position

    // Check if the current scroll position is within the section's range
    if (
      scrollPosition >= sectionTop - sectionHeight / 2 &&
      scrollPosition < sectionTop + sectionHeight / 2
    ) {
      currentSectionIndex = index;
    }
  });

  // Set the global currentSection variable to the detected section
  currentSection = currentSectionIndex;

  // Optionally, log the current section index for debugging
  csection = currentSection; // Return the current section index

  // You can also trigger functions or animations based on the detected section
  handleGlobeTransition(currentSection); // Call your transition function based on the new current section
}

function isIOS() {
  let isSafari =
    navigator.vendor.match(/apple/i) &&
    !navigator.userAgent.match(/crios/i) &&
    !navigator.userAgent.match(/fxios/i) &&
    !navigator.userAgent.match(/Opera|OPT\//);
  return isSafari;
}

function supportsHEVCAlpha() {
  const navigator = window.navigator;
  const ua = navigator.userAgent.toLowerCase();
  const hasMediaCapabilities = !!(
    navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
  );
  const isSafari =
    ua.indexOf("safari") != -1 &&
    !(ua.indexOf("chrome") != -1) &&
    ua.indexOf("version/") != -1;

  return isSafari && hasMediaCapabilities;
}

function selectPlanet(planetName) {
  const sectionDefaultTitle = document.getElementById("section-default-title");
  const sectionTitle = document.getElementById("section-title");
  const sectionSubtitle = document.getElementById("section-subtitle");
  const sectionDescription = document.getElementById("section-description");
  const sunVideo = document.getElementById("sunVideo");
  const planetLinks = document.querySelectorAll(".planet-links a");

  // Hide default title
  sectionDefaultTitle.classList.add("fade-up", "hidden");

  // Remove active state from all planets
  planetLinks.forEach(pl => pl.classList.remove("active"));

  // Find and activate Mercury link
  const mercuryLink = Array.from(planetLinks).find(
    link => link.getAttribute("data-planet") === planetName
  );
  if (mercuryLink) {
    mercuryLink.classList.add("active");

    // Get data from Mercury link
    const subtitle = mercuryLink.getAttribute("data-subtitle");
    const description = mercuryLink.getAttribute("data-description");

    // Update video with transition
    sunVideo.style.opacity = "0";
    setTimeout(() => {
      sunVideo.src = supportsHEVCAlpha()
        ? `assets/globs/${planetName.toLowerCase()}outputnew.mov`
        : `assets/globs/${planetName.toLowerCase()}.webm`;
      sunVideo.style.opacity = "1";
    }, 300);

    setTimeout(() => {
      // Clear video sources
      while (sunVideo.firstChild) {
        sunVideo.removeChild(sunVideo.firstChild);
      }

      if (supportsHEVCAlpha()) {
        sunVideo.innerHTML = `
          <source src="assets/globs/${planetName.toLowerCase()}outputnew.mov">
        `;
      } else {
        sunVideo.innerHTML = `
          <source src="assets/globs/${planetName.toLowerCase()}.webm" type='video/webm'>
        `;
      }

      sunVideo.src = supportsHEVCAlpha()
        ? `assets/globs/${planetName.toLowerCase()}outputnew.mov`
        : `assets/globs/${planetName.toLowerCase()}.webm`;

      sunVideo.load();
      sunVideo.play();
      sunVideo.style.opacity = "1";
    }, 300);

    // Update text content with animations
    sectionTitle.classList.remove("fade-in");
    sectionSubtitle.classList.remove("fade-in");
    sectionDescription.classList.remove("fade-in");

    setTimeout(() => {
      sectionTitle.textContent = planetName;
      sectionSubtitle.textContent = subtitle;
      sectionDescription.textContent = description;

      sectionTitle.classList.add("fade-in");
      sectionSubtitle.classList.add("fade-in");
      sectionDescription.classList.add("fade-in");
    }, 300);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const planetLinks = document.querySelectorAll(".planet-links a");
  const sunVideo = document.getElementById("sunVideo");
  const sectionTitle = document.getElementById("section-title");
  const sectionSubtitle = document.getElementById("section-subtitle");
  const sectionDescription = document.getElementById("section-description");
  const sectionDefaultTitle = document.getElementById("section-default-title");

  planetLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      // Hide the default title
      sectionDefaultTitle.classList.add("fade-up");
      sectionDefaultTitle.classList.add("hidden");

      // Remove active state from all planets
      planetLinks.forEach(pl => {
        pl.classList.remove("active");
      });

      // Add active state to clicked planet
      this.classList.add("active");

      // Get data from clicked planet
      const planet = this.getAttribute("data-planet");
      const subtitle = this.getAttribute("data-subtitle");
      const description = this.getAttribute("data-description");

      // Update video source with transition
      sunVideo.style.opacity = "0";
      setTimeout(() => {
        console.log("planet1", planet);

        sunVideo.src = supportsHEVCAlpha()
          ? planet.includes("Earth")
            ? `assets/globs/earthouputnew.mov`
            : `assets/globs/${planet.toLowerCase()}outputnew.mov`
          : `assets/globs/${planet.toLowerCase()}.webm`;
        sunVideo.style.opacity = "1";
      }, 300);

      setTimeout(() => {
        // Clear video sources
        while (sunVideo.firstChild) {
          sunVideo.removeChild(sunVideo.firstChild);
        }

        if (supportsHEVCAlpha()) {
          if (planet.includes("Earth")) {
            sunVideo.innerHTML = `
              <source src="assets/globs/earthouputnew.mov"'>
            `;
          } else {
            sunVideo.innerHTML = `
              <source src="assets/globs/${planet.toLowerCase()}outputnew.mov">
            `;
          }
        } else {
          sunVideo.innerHTML = `
            <source src="assets/globs/${planet.toLowerCase()}.webm" type='video/webm'>
          `;
        }

        // Also set the src attribute on the video element itself
        sunVideo.src = supportsHEVCAlpha()
          ? planet.includes("Earth")
            ? "assets/globs/earthouputnew.mov"
            : `assets/globs/${planet.toLowerCase()}outputnew.mov`
          : `assets/globs/${planet.toLowerCase()}.webm`;

        sunVideo.load();
        sunVideo.play();
        sunVideo.style.opacity = "1";
      }, 300);

      // Update text content with animations
      sectionTitle.classList.remove("fade-in");
      sectionSubtitle.classList.remove("fade-in");
      sectionDescription.classList.remove("fade-in");

      setTimeout(() => {
        sectionTitle.textContent = planet;
        sectionSubtitle.textContent = subtitle;
        sectionDescription.textContent = description;

        sectionTitle.classList.add("fade-in");
        sectionSubtitle.classList.add("fade-in");
        sectionDescription.classList.add("fade-in");
      }, 300);
    });
  });
});

// Add event listener for scroll events to detect the current section in real-time
let lastScrollPosition = 0;
let isBeen0 = false;

function isAppleDevice() {
  return /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);
}

console.log("is ios", isIOS());
console.log("is safari", isAppleDevice());
console.log("user", navigator.userAgent);
console.log("is havec", supportsHEVCAlpha());

function mySunFunc() {
  const sunVideo = document.getElementById("sunVideo");
  const planetName = document.getElementById("planet-name");
  const windowHeight = window.innerHeight;
  const scrollPosition = window.pageYOffset;
  const scrollProgress = scrollPosition / windowHeight;
  detectCurrentSection(); // Keep your existing section detection
  //   console.log("csection", csection);
  const globe = document.getElementById("vid");

  let progress = Math.min(scrollProgress, 1);
  let leftPosition = 50 + progress * 25; // 50% to 80%
  let bottomPosition = -70 + progress * 60; // -70% to 50%
  let scale = 1 - progress * 0.3; // 1 to 0.7

  const is1650 = window.matchMedia("(min-width: 1650px)").matches;
  const is1400 = window.matchMedia(
    "(min-width: 1400px) and (max-width: 1650px)"
  ).matches;
  const is1020 = window.matchMedia("(min-width: 770px) and (max-width: 1220px)")
    .matches;
  const isTablet = window.matchMedia(
    "(min-width: 520px) and (max-width: 769px)"
  ).matches;
  const ismobile = window.matchMedia("(max-width: 520px)").matches;

  // console.log("csection csection", csection, scrollPosition, scrollProgress);
  // console.log("isBeen0", isBeen0);

  if (csection == 0) {
    // planetName.style.opacity = "0";

    isBeen0 = true;

    sunVideo.style.removeProperty("top"); // Remove top property

    progress = Math.min(scrollProgress, 1);
    // leftPosition = 50.28490028490028;
    // bottomPosition = -69.31623931623932;
    // scale = 0.9965811965811966;
    if (is1650) {
      leftPosition = 50.28490028490028;
      bottomPosition = -70.31623931623932;
      scale = 0.9965811965811966;
      sunVideo.style.width = `${window.innerHeight * 1.12}px`;
    } else if (ismobile) {
      leftPosition = 50.28490028490028;
      bottomPosition = -72.31623931623932;
      scale = 0.9965811965811966;
      sunVideo.style.width = `${window.innerHeight}px`;
    } else {
      // else if (is1400) {
      //   leftPosition = 50.28490028490028;
      //   bottomPosition = -135.31623931623932;
      //   scale = 0.9965811965811966;
      //   sunVideo.style.width = "80%";
      // } else if (is1020) {
      //   // Tablet specific values for section 0
      //   leftPosition = 50;
      //   bottomPosition = -80; // Adjusted higher for tablet
      //   scale = 0.9965811965811966; // Slightly smaller for tablet
      // } else if (isTablet) {
      //   // Tablet specific values for section 0
      //   leftPosition = 50;
      //   bottomPosition = -40; // Adjusted higher for tablet
      //   scale = 0.8; // Slightly smaller for tablet
      //   sunVideo.style.width = "50%";
      //}

      // Desktop values (your existing values)
      leftPosition = 50.28490028490028;
      bottomPosition = -72.31623931623932;
      scale = 0.9965811965811966;
      sunVideo.style.width = `${window.innerHeight * 1.12}px`;
    }

    sunVideo.style.position = "fixed";
    sunVideo.style.transition = "0.5s ease-out";
    sunVideo.style.left = `${leftPosition}%`;
    sunVideo.style.bottom = `${bottomPosition}%`;
    sunVideo.style.transform = `translateX(-50%) scale(${scale})`;
    sunVideo.style.opacity = "1";
  }
  if (
    isBeen0 &&
    !ismobile &&
    !isTablet &&
    scrollProgress < 1.0112492498644519 &&
    scrollProgress > 0.013618296529968454
  ) {
    // console.log("in scroll");
    // planetName.style.opacity = "0";

    const progressRatio =
      (scrollProgress - 0.013618296529968454) /
      (1.0112492498644519 - 0.013618296529968454);

    // Interpolate left position from 50% to 80%
    const interpolatedLeft = 50 + progressRatio * 30;

    // Interpolate top position from -10% to final position

    let interpolatedTop = -80 + progressRatio * 30;
    sunVideo.style.width = `${window.innerHeight * 1.12}px`;

    // Interpolate scale
    const interpolatedScale = 0.9965811965811966 - progressRatio * 0.3;

    sunVideo.style.transition = "0.5 ease-out"; // Remove transition for smooth scrolling
    sunVideo.style.left = `${interpolatedLeft}%`;
    sunVideo.style.bottom = `${interpolatedTop}%`;
    sunVideo.style.transform = `translateX(-50%) scale(${interpolatedScale})`;
  }
  if (csection == 1) {
    // console.log("in 1");
    // planetName.style.opacity = "0";

    // console.log("csection csection", csection, scrollPosition, scrollProgress);

    isBeen0 = false;

    progress = Math.min(scrollProgress, 1);

    if (is1650) {
      leftPosition = 80.78632478632478;
      bottomPosition = -8.7;
      scale = 0.7025641025641025;
      sunVideo.style.width = `${window.innerHeight}px`;
    } else if (is1400) {
      leftPosition = 80.78632478632478;
      bottomPosition = -6;
      scale = 0.7025641025641025;
      sunVideo.style.width = "47%";
    } else if (is1020) {
      // Tablet specific values for section 1
      leftPosition = 80;
      bottomPosition = 10;
      scale = 0.6;
      sunVideo.style.width = "47%";
    } else if (isTablet) {
      // Tablet specific values for section 1
      leftPosition = 80;
      bottomPosition = 0;
      scale = 0.6;
      sunVideo.style.width = "60%";
    } else if (ismobile) {
      leftPosition = 50;
      bottomPosition = -5;
      scale = 0.6;
      sunVideo.style.width = "96%";
    } else {
      // Desktop values (your existing values)
      leftPosition = 80.78632478632478;
      bottomPosition = -7.512820512820511;
      scale = 0.7025641025641025;
      sunVideo.style.width = "47%";
    }

    if (!sunVideo.src.includes("sun")) {
      sunVideo.src = supportsHEVCAlpha()
        ? "assets/globs/sunoutputnew.mov"
        : "assets/globs/sun.webm";
      // sunVideo.dataset.planet === "Sun";
      // selectPlanet("Sun");
      // sunVideo.src = "assets/globs/sun.webm";
    }

    console.log("planet: in 1 ", sunVideo);

    sunVideo.style.position = "fixed";
    sunVideo.style.transition = "0.5s ease-out";
    // sunVideo.style.transition = "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)";
    sunVideo.style.left = `${leftPosition}%`;
    sunVideo.style.bottom = `${bottomPosition}%`;
    sunVideo.style.transform = `translateX(-50%) scale(${scale})`;
    sunVideo.style.opacity = "1";

    setTimeout(() => {
      sunVideo.style.removeProperty("top"); // Remove top property
    }, 1);
  }
  if (csection == 2) {
    isBeen0 = false;
    planetName.style.opacity = "1";
    console.log("planet: in 2 ", sunVideo);

    if (sunVideo.dataset.planet === "Sun") {
      // Fixed syntax
      sunVideo.dataset.planet = "Mercury";
      setTimeout(() => {
        selectPlanet("Mercury");
      }, 300);
    }

    if (sunVideo.dataset.planet === "Mercury" && sunVideo.src.includes("sun")) {
      setTimeout(() => {
        if (
          sunVideo.dataset.planet === "Mercury" &&
          sunVideo.src.includes("sun")
        ) {
          selectPlanet("Mercury");
        }
      }, 600);
    }

    progress = Math.min(scrollProgress, 1);
    // leftPosition = 50;
    // bottomPosition = -46;
    // scale = 0.6;
    if (is1650) {
      leftPosition = 50.28490028490028;
      bottomPosition = -42.31623931623932;
      scale = 0.56;
      sunVideo.style.width = `${window.innerHeight + 70}px`;
    } else if (is1400) {
      leftPosition = 50;
      bottomPosition = -50;
      scale = 0.56;
      sunVideo.style.width = `${window.innerHeight * 1.16}px`;
    } else if (is1020) {
      scale = 0.5;
      leftPosition = 50;
      bottomPosition = -25; // Adjusted higher for tablet
      sunVideo.style.width = "50%";
    } else if (isTablet) {
      // Tablet specific values for section 2
      leftPosition = 50;
      bottomPosition = -47;
      scale = 0.5;
      sunVideo.style.width = "90%";
    } else if (ismobile && window.innerHeight > 1100) {
      bottomPosition = -13.5;
      scale = 0.75;
      leftPosition = 50;
      sunVideo.style.width = "78%";
      if (supportsHEVCAlpha()) {
        if (!sunVideo.src.includes("sun")) {
          sunVideo.style.width = 0.75;
        }
      }
    } else if (ismobile) {
      bottomPosition = -14;
      scale = 0.75;
      leftPosition = 50;
      sunVideo.style.width = "77%";
    } else {
      // Desktop values (your existing values)
      leftPosition = 50.5;
      bottomPosition = -46;
      scale = 0.56;
      sunVideo.style.width = `${window.innerHeight * 1.16}px`;
    }

    if (sunVideo.src.includes("saturn")) {
      sunVideo.style.transform = `translateX(-50%) scale(0.2)`;

      // Grow to full size
      setTimeout(() => {
        sunVideo.style.transform = `translateX(-50%) scale(1)`;
      }, 5);

      // Reset transition timing
      setTimeout(() => {
        sunVideo.style.transition = "0.5s ease-out";
      }, 10);
    }

    sunVideo.style.position = "fixed";
    sunVideo.style.transition = "0.5s ease-out";
    sunVideo.style.left = `${leftPosition}%`;
    sunVideo.style.bottom = `${bottomPosition}%`;
    sunVideo.style.transform = `translateX(-50%) scale(${scale})`;
    sunVideo.style.opacity = "1";
  }

  if (csection >= 3) {
    // planetName.style.opacity = "0";
    sunVideo.style.opacity = "0";
  }
  lastScrollPosition = scrollPosition;
}

window.addEventListener("resize", mySunFunc);

// Replace the current scroll event listener
window.addEventListener("scroll", mySunFunc);

document.addEventListener("DOMContentLoaded", mySunFunc);

addEventListener("load", detectCurrentSection);
function scrollToSection(sectionIndex) {
  sections[sectionIndex].scrollIntoView({
    behavior: "smooth",
  });
}

function handleGlobeTransition(section) {
  const sunVideo = document.getElementById("sunVideo");
  const bgVideo = document.getElementById("background-video");
  const header1 = document.getElementById("header1");
  const planetName = document.getElementById("planet-name");

  const windowHeight = window.innerHeight;
  const scrollPosition = window.pageYOffset;
  const scrollProgress = scrollPosition / windowHeight;
  const isTablet = window.matchMedia("(max-width: 769px)").matches;

  if (section === 0) {
    // First section - sun at bottom center
    sunVideo.style.position = "fixed";
    sunVideo.style.transition = "all 1s ease-in-out";
    // if (isTablet) {
    //   sunVideo.style.bottom = "-100px";
    // } else {
    //   sunVideo.style.bottom = "-70%";
    // }
    sunVideo.style.left = "50%";
    sunVideo.style.transform = "translateX(-50%) scale(1)";
    sunVideo.style.opacity = "1";
    // planetName.style.opacity = "0";
  } else if (section === 1) {
    // vid_motion.src = "assets/globs/sun.webm";
    // section1.classList.add('hidden');
    // section2.classList.remove('hidden');
    // section3.classList.add('hidden');
    // section4.classList.add('hidden');
    // section5.classList.add('hidden');
    text2.classList.remove("hidden");
    const textDiv = document.querySelector(".section2 .text");
    if (textDiv) {
      textDiv.setAttribute("data-aos", "fade-down");
      textDiv.setAttribute("data-aos-offset", "200");
      textDiv.setAttribute("data-aos-delay", "50");
      textDiv.setAttribute("data-aos-duration", "2000");
      textDiv.setAttribute("data-aos-mirror", "true");
      textDiv.setAttribute("data-aos-once", "false");
    }

    // planetName.style.opacity = "0";

    // sunVideo.style.left = "50%";
    // sunVideo.style.opacity = "1";
    // sunVideo.style.top = "80%";
    // vid_motion.classList.remove("hidden");
    // vid_motion.style.position = "absolute";
    // vid_motion.style.transition =
    //   "transform 2s ease, right 2s ease, bottom 2s ease";
    // vid_motion.style.transform = "scale(0.5)";
    // vid_motion.style.left = "40%";
    // vid_motion.style.top = "95%";
    const footer = document.querySelector(".section2-content"); // Adjust selector as necessary
    const footerRect = footer.getBoundingClientRect();

    // if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
    //   // Apply specific property when footer is visible
    //   // vid_motion.style.top = '5%';
    //   vid_motion.style.transition = "opacity 1s ease"; // Smooth transition for the property
    // } else {
    //   vid_motion.style.top = "95%";
    //   vid_motion.style.opacity = "1"; // Reset opacity if not in the footer area
    // }
  } else if (section === 2) {
    // section1.classList.add('hidden');
    // section2.classList.add('hidden');
    // section3.classList.remove('hidden');
    // section4.classList.add('hidden');
    // section5.classList.add('hidden');
    header1.style.opacity = "1";
    header1.style.display = "block";
    // header1.style.top = "2px";

    const section3 = document.querySelector(".section3");
    const planetContainer = section3.querySelector(".planet-container");
    const containerRect = planetContainer.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    // sunVideo.style.position = "fixed";
    // sunVideo.style.transition = "all 1s ease-in-out";
    // sunVideo.style.left = `${centerX}px`;
    // sunVideo.style.top = `${centerY}px`;
    // sunVideo.style.transform = "translate(-50%, -50%) scale(0.5)";
    // // sunVideo.style.width = "300px"; // Adjust size as needed
    // sunVideo.style.zIndex = "1";

    text2.classList.add("hidden");
    // Reset to initial state for section 1
    // vid_motion.classList.remove("hidden");
    // vid_motion.style.position = "fixed";
    // vid_motion.style.transition =
    //   "transform 1s ease, right 7s ease-in-out, bottom 10s ease";
    // vid_motion.style.transform = "scale(0.5, 0.5)";

    // // Position it at the bottom center
    // vid_motion.style.left = ""; // Center horizontally by subtracting half the width
    // setTimeout(() => {
    //   vid_motion.style.top = "45%"; // Move to the bottom of section 3
    // }, 10);
    // vid_motion.style.position = "fixed"; // Keep it in view during the scroll
    // vid_motion.style.position = 'absolute';
  } else if (section === 3) {
    sunVideo.style.opacity = "0";
    header1.style.top = "2px";
    // header1.style.opacity = "0";
    // header1.style.display = "none";
    // vid_motion.src = "assets/globs/sun.webm";

    // section1.classList.add('hidden');
    // section2.classList.add('hidden');
    // section3.classList.add('hidden');
    // section4.classList.remove('hidden');
    // section5.classList.add('hidden');
    // vid_motion.classList.add("hidden");
    video1.classList.remove("hidden");
    video2.classList.add("hidden");
    // content.classList.add("hidden");
    video1.play(); // Start the first video when scrolled to section

    video1.onended = function() {
      video1.classList.add("hidden"); // Hide the first video after it finishes
      video2.classList.remove("hidden"); // Show the second video
      content.classList.remove("hidden"); // Display the HTML content
      video2.play();
    };
    // video2.classList.remove('hidden');  // Show the second video
    // content.classList.remove('hidden');
  } else if (section === 4) {
    sunVideo.style.opacity = "0";
    header1.style.top = "2px";

    // header1.style.opacity = "0";
    // header1.style.display = "none";
    // planetName.style.opacity = "0";

    // section1.classList.add('hidden');
    // section2.classList.add('hidden');
    // section3.classList.add('hidden');
    // section4.classList.add('hidden');
    // section5.classList.remove('hidden');
    vid_motion.classList.add("hidden");
    video3.play();
  } else {
    planetName.style.opacity = "0";

    // section1.classList.remove('hidden');
    // section2.classList.add('hidden');
    // section3.classList.add('hidden');
    // section4.classList.add('hidden');
    // section5.classList.add('hidden');
    text2.classList.add("hidden");
    // Reset to initial state for section 1
    vid_motion.classList.remove("hidden");
    vid_motion.style.transform = "scale(1)";
    vid_motion.style.left = "50%"; // Center in section 1
    vid_motion.style.top = "80%"; // Adjust as needed for section 1

    vid_motion.style.position = "absolute";
    vid_motion.style.top = "";
    vid_motion.style.left = "";
    vid_motion.style.transform = "scale(1) translateX(0)";
    vid_motion.classList.remove("reshap");
    smallGlobe.style.transform = "translate(50px, 50px)";
    // section2.style.visibility = 'hidden';
  }
}
